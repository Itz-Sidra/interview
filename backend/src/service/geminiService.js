import Groq from "groq-sdk";
import { jsonrepair } from "jsonrepair";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// ---------------------------------------------------------------------------
// Fallback response — returned whenever parsing fails completely.
// Keeps the same shape the controller expects so nothing downstream breaks.
// ---------------------------------------------------------------------------
function buildFallbackResponse(session, reason = "parse_failure") {
  console.warn(`[geminiService] Using fallback response. Reason: ${reason}`);
  return {
    evaluation: {
      answerQuality:  60,
      relevance:      60,
      clarity:        60,
      completeness:   60,
      technicalDepth: 60,
    },
    detectedIssues:    [],
    nextQuestion:      generateFallbackQuestion(session),
    questionRationale: "Fallback — AI response could not be parsed",
    followUpCategory:  "GENERAL",
  };
}

// ---------------------------------------------------------------------------
// safeParseJSON
//
// Layers of defence:
//   1. Strip markdown fences, leading/trailing whitespace
//   2. JSON.parse() — fastest happy path
//   3. Light sanitisation of common Groq quirks, then JSON.parse() again
//   4. jsonrepair() — handles structural issues (trailing commas, etc.)
//   5. Throw a controlled error if all layers fail
// ---------------------------------------------------------------------------
function safeParseJSON(raw) {
  // ── Layer 0: strip markdown fences ───────────────────────────────────────
  const stripped = raw
    .replace(/```json[\s\S]*?```/gi, (m) => m.replace(/```json|```/gi, ""))
    .replace(/```/g, "")
    .trim();

  // ── Layer 1: optimistic parse ─────────────────────────────────────────────
  try {
    return JSON.parse(stripped);
  } catch (_) {
    // fall through to sanitisation
  }

  // ── Layer 2: sanitise common Groq malformations ───────────────────────────
  const sanitised = sanitiseGroqOutput(stripped);

  try {
    return JSON.parse(sanitised);
  } catch (_) {
    // fall through to jsonrepair
  }

  // ── Layer 3: jsonrepair ───────────────────────────────────────────────────
  try {
    const repaired = jsonrepair(sanitised);
    return JSON.parse(repaired);
  } catch (err) {
    console.error("[geminiService] safeParseJSON: all layers failed.", err.message);
    console.error("[geminiService] Raw text (first 400 chars):", raw.substring(0, 400));
    throw new Error("UNRECOVERABLE_JSON");
  }
}

// ---------------------------------------------------------------------------
// sanitiseGroqOutput
//
// Fixes the specific patterns Groq is known to emit:
//
//   "example": ""some text""          → "example": "some text"
//   "example": "He said ""hello"""    → "example": "He said \"hello\""
//   stray literal \n inside values    → space
//   Windows-style \r\n                → removed
//   multiple spaces                   → single space
//   trailing commas before } or ]     → removed
//   unescaped control characters      → removed
// ---------------------------------------------------------------------------
function sanitiseGroqOutput(text) {
  let s = text;

  // 1. Normalize line endings
  s = s.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  // 2. Fix double double-quotes that Groq emits inside string values.
  //    Pattern: a JSON string value that starts/ends with an extra "
  //    e.g.  "key": ""value""   →  "key": "value"
  //    We use a targeted regex that looks for: ": "" ... ""
  s = s.replace(/:\s*""(.*?)""/g, (_, inner) => {
    // Escape any real double quotes that sit inside the inner content
    const escaped = inner.replace(/"/g, '\\"');
    return `: "${escaped}"`;
  });

  // 3. Remove literal newlines / tabs that appear inside JSON string values
  //    (they break JSON.parse even though they're technically allowed as \n)
  s = s.replace(/"([^"]*)"/g, (match) =>
    match
      .replace(/\n/g, " ")   // newline → space
      .replace(/\t/g, " ")   // tab → space
  );

  // 4. Collapse multiple spaces to one
  s = s.replace(/ {2,}/g, " ");

  // 5. Remove trailing commas before closing braces/brackets
  //    e.g.  { "a": 1, }  →  { "a": 1 }
  s = s.replace(/,\s*([\]}])/g, "$1");

  // 6. Remove unescaped control characters (ASCII 0-8, 11-31) inside strings
  // eslint-disable-next-line no-control-regex
  s = s.replace(/[\x00-\x08\x0b-\x1f]/g, "");

  return s;
}

// ---------------------------------------------------------------------------
// evaluateAndGenerateNextQuestion
// ---------------------------------------------------------------------------
export async function evaluateAndGenerateNextQuestion(session, candidateAnswer) {
  const prompt = buildPrompt(session, candidateAnswer);

  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: [
            "You are an expert technical interviewer.",
            "You MUST respond with valid JSON only.",
            "Do NOT include markdown backticks or code fences.",
            "Do NOT wrap string values in extra double-quotes.",
            "Do NOT include newlines or tab characters inside string values.",
            "Do NOT add explanations or commentary outside the JSON object.",
            "Every string value must use standard escaped quotes (\\\" ) if a quote is needed inside a value.",
          ].join(" "),
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens:  1024,
    });

    const rawText = response.choices[0].message.content;
    console.log(
      "[geminiService] Raw Groq response (first 300 chars):",
      rawText.substring(0, 300)
    );

    let evaluation;
    try {
      evaluation = safeParseJSON(rawText);
    } catch (parseErr) {
      // Parsing failed at every layer — return a safe fallback instead of
      // crashing the controller.
      return buildFallbackResponse(session, parseErr.message);
    }

    validateResponse(evaluation, session);
    return evaluation;

  } catch (error) {
    // ── Rate-limit / quota errors ────────────────────────────────────────────
    const isRateLimit =
      error?.status === 429 ||
      error?.message?.includes("429") ||
      error?.message?.includes("Quota") ||
      error?.message?.includes("rate_limit");

    if (isRateLimit) {
      console.warn("[geminiService] Groq rate limit hit — returning fallback");
      throw new Error("GEMINI_RATE_LIMIT"); // controller already handles this
    }

    // ── Any other Groq / network error ──────────────────────────────────────
    console.error("[geminiService] Groq API error:", error.message);
    // Return fallback so the interview can continue rather than 500-ing
    return buildFallbackResponse(session, `groq_error: ${error.message}`);
  }
}

// ---------------------------------------------------------------------------
// buildPrompt — structure unchanged; JSON-safety constraints added at the top
// ---------------------------------------------------------------------------
function buildPrompt(session, candidateAnswer) {
  const previousQA = session.questionHistory
    .map((q, i) => {
      const answer = session.answerHistory[i]?.rawAnswer || "N/A";
      return `Q${i + 1}: ${q.question}\nA${i + 1}: ${answer}`;
    })
    .join("\n\n");

  const resumeSnippet = (session.resumeText || "").substring(0, 800).trim();

  return `
INTERVIEW CONTEXT:
- Role: ${session.role}
- Company: ${session.company || "Unknown"}
- Difficulty Level: ${session.difficulty}
- Interview Type: ${session.type}
- Questions Answered: ${session.questionsAnswered}/${session.totalQuestions}

CANDIDATE RESUME (Summary):
${resumeSnippet || "No resume provided"}

INTERVIEW HISTORY:
${previousQA || "This is the first question"}

CURRENT ANSWER TO EVALUATE:
"${candidateAnswer}"

EVALUATION INSTRUCTIONS (FOLLOW EXACTLY):
1. FIRST: Generate ONE specific follow-up interview question based on the candidate's answer.
2. THEN: Score the answer on relevance(0-100), clarity(0-100), completeness(0-100), and technical depth(0-100).
3. Identify at most ONE important issue (optional).
4. Briefly explain why you chose the follow-up question (1 sentence max).

CRITICAL RULES:
- The follow-up question MUST always be present.
- If unsure, ask a question that probes reasoning, decisions, or examples.
- If no issues exist, return an empty detectedIssues array.
- Do NOT write long issue descriptions.
- Return ONLY valid JSON. No markdown. No backticks. No extra text.
- Do NOT wrap string values in extra double-quotes (e.g. write "value" not ""value"").
- Do NOT include literal newlines or tabs inside any string value.
- If you need a double-quote inside a string, escape it as \\".

{
  "evaluation": {
    "answerQuality": 75,
    "relevance": 80,
    "clarity": 70,
    "completeness": 75,
    "technicalDepth": 80
  },
  "detectedIssues": [
    {
      "type": "GRAMMAR",
      "severity": 1,
      "description": "Minor grammar issue",
      "example": "the exact phrase from the answer that contains the issue",
      "suggestion": "the corrected version of that phrase"
    }
  ],
  "nextQuestion": "Your follow-up question here",
  "questionRationale": "Why you chose this question",
  "followUpCategory": "TECHNICAL"
}
  `.trim();
}

// ---------------------------------------------------------------------------
// validateResponse — normalises any fields the LLM may have omitted/mangled
// ---------------------------------------------------------------------------
function normalizeSeverity(severity) {
  if (typeof severity !== "number") return 1;
  if (severity <= 1) return 1;
  if (severity === 2) return 2;
  return 3;
}

function generateFallbackQuestion(session) {
  const n = session?.questionsAnswered ?? 0;
  if (n === 0) return "Can you walk me through a recent project you worked on and your role in it?";
  if (n === 1) return "What was the reasoning behind one of the technical decisions you mentioned?";
  if (n === 2) return "What challenges did you face in that situation, and how did you overcome them?";
  if (n === 3) return "How would you improve the approach if you had more time?";
  return "Can you give a concrete example from your experience to support that point?";
}

function validateResponse(evaluation, session) {
  // ── evaluation object ─────────────────────────────────────────────────────
  if (!evaluation.evaluation || typeof evaluation.evaluation !== "object") {
    evaluation.evaluation = {
      answerQuality:  60,
      relevance:      60,
      clarity:        60,
      completeness:   60,
      technicalDepth: 60,
    };
  }

  const clamp = (v) =>
    typeof v === "number" ? Math.min(100, Math.max(0, Math.round(v))) : 60;

  evaluation.evaluation.answerQuality  = clamp(evaluation.evaluation.answerQuality);
  evaluation.evaluation.relevance      = clamp(evaluation.evaluation.relevance);
  evaluation.evaluation.clarity        = clamp(evaluation.evaluation.clarity);
  evaluation.evaluation.completeness   = clamp(evaluation.evaluation.completeness);
  evaluation.evaluation.technicalDepth = clamp(evaluation.evaluation.technicalDepth);

  // ── detectedIssues ────────────────────────────────────────────────────────
  if (!Array.isArray(evaluation.detectedIssues)) {
    evaluation.detectedIssues = [];
  }

  evaluation.detectedIssues = evaluation.detectedIssues.map((issue) => ({
    ...issue,
    severity:    normalizeSeverity(issue.severity),
    description: typeof issue.description === "string" ? issue.description.trim() : "",
    example:     typeof issue.example     === "string" ? issue.example.trim()     : "",
    suggestion:  typeof issue.suggestion  === "string" ? issue.suggestion.trim()  : "",
  }));

  // ── nextQuestion ──────────────────────────────────────────────────────────
  if (!evaluation.nextQuestion || typeof evaluation.nextQuestion !== "string" || !evaluation.nextQuestion.trim()) {
    evaluation.nextQuestion = generateFallbackQuestion(session);
  }

  // ── followUpCategory ──────────────────────────────────────────────────────
  if (!evaluation.followUpCategory || typeof evaluation.followUpCategory !== "string") {
    evaluation.followUpCategory = "GENERAL";
  }

  // ── questionRationale ─────────────────────────────────────────────────────
  if (!evaluation.questionRationale || typeof evaluation.questionRationale !== "string") {
    evaluation.questionRationale = "Follow-up based on candidate response";
  }
}

export default { evaluateAndGenerateNextQuestion };