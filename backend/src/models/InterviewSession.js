// ✅ FIXED: deserializeIssueDescription is now properly exported
import { PrismaClient } from "../generated/index.js";

const prisma = new PrismaClient();

const CATEGORY_MAP = {
  FILLER_WORDS:     "FILLER_WORDS",
  LOW_CONFIDENCE:   "CONFIDENCE",
  GRAMMAR:          "GRAMMAR",
  MISSING_CONCEPTS: "TECHNICAL",
  VAGUE_ANSWER:     "COMMUNICATION",
  DEFAULT:          "COMMUNICATION",
};

/**
 * Serialize full issue detail into the `description` column as JSON.
 * Shape: { text, example?, suggestion? }
 */
function serializeIssueDescription(issue) {
  const payload = {
    text: issue.description || "No description provided",
  };
  if (issue.example    && issue.example.trim())    payload.example    = issue.example.trim();
  if (issue.suggestion && issue.suggestion.trim()) payload.suggestion = issue.suggestion.trim();
  return JSON.stringify(payload);
}

/**
 * Deserialize a stored description back to its parts.
 * Falls back gracefully when the value is plain text (legacy rows).
 */
export function deserializeIssueDescription(raw) {
  try {
    const parsed = JSON.parse(raw);
    return {
      text:       parsed.text       || raw,
      example:    parsed.example    || null,
      suggestion: parsed.suggestion || null,
    };
  } catch {
    return { text: raw, example: null, suggestion: null };
  }
}

// ---------------------------------------------------------------------------
// getInterviewSession
// ---------------------------------------------------------------------------
export async function getInterviewSession(interviewId) {
  try {
    const interview = await prisma.interview.findUnique({
      where:   { id: interviewId },
      include: { config: true, questions: true, issues: true },
    });

    if (!interview) return null;

    return {
      interviewId:      interview.id,
      userId:           interview.userId,
      configId:         interview.configId,
      cumulativeScores: {
        overall:    interview.overallScore || 0,
        technical:  interview.overallScore || 0,
        confidence: interview.overallScore || 0,
        grammar:    interview.overallScore || 0,
      },
    };
  } catch (error) {
    console.error("Get session error:", error);
    throw error;
  }
}

// ---------------------------------------------------------------------------
// saveQuestionAndEvaluation
// ---------------------------------------------------------------------------
export async function saveQuestionAndEvaluation(interviewId, question, evaluation) {
  try {
    const scores = evaluation.evaluation;

    const scoreAverage =
      (scores.answerQuality +
        scores.relevance +
        scores.clarity +
        scores.completeness +
        scores.technicalDepth) / 5;

    const savedQuestion = await prisma.question.create({
      data: {
        interviewId,
        prompt:       question,
        evaluation:   scores,
        scoreAverage,
      },
    });

    const allScoredQuestions = await prisma.question.findMany({
      where:  { interviewId, scoreAverage: { not: null } },
      select: { scoreAverage: true },
    });

    const overallScore =
      allScoredQuestions.length > 0
        ? allScoredQuestions.reduce((sum, q) => sum + q.scoreAverage, 0) / allScoredQuestions.length
        : null;

    await prisma.interview.update({
      where: { id: interviewId },
      data:  { overallScore },
    });

    if (Array.isArray(evaluation.detectedIssues) && evaluation.detectedIssues.length > 0) {
      const issuePromises = evaluation.detectedIssues.map((issue) => {
        const category    = CATEGORY_MAP[issue.type] || CATEGORY_MAP.DEFAULT;
        const description = serializeIssueDescription(issue);
        const severity    = normalizeSeverity(issue.severity);
        const timestampMs = BigInt(Date.now());

        return prisma.flaggedIssue.create({
          data: { interviewId, category, description, severity, timestampMs },
        });
      });

      await Promise.all(issuePromises);
    }

    return savedQuestion;
  } catch (error) {
    console.error("Save evaluation error:", error);
    throw error;
  }
}

// ---------------------------------------------------------------------------
// updateInterviewScores
// ---------------------------------------------------------------------------
export async function updateInterviewScores(interviewId, evaluation) {
  try {
    const scores = evaluation.evaluation;
    const averageScore =
      (scores.answerQuality +
        scores.relevance +
        scores.clarity +
        scores.completeness +
        scores.technicalDepth) / 5;

    await prisma.interview.update({
      where: { id: interviewId },
      data:  { overallScore: averageScore },
    });
  } catch (error) {
    console.error("Update scores error:", error);
    throw error;
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function normalizeSeverity(severity) {
  if (typeof severity !== "number") return 1;
  if (severity <= 1) return 1;
  if (severity === 2) return 2;
  return 3;
}

export default { getInterviewSession, saveQuestionAndEvaluation, updateInterviewScores };