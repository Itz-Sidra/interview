/**
 * Technical Evaluator
 *
 * Wraps the existing Gemini evaluation logic from geminiService.js.
 * No logic has changed — this is a pure extraction/re-export shim.
 *
 * Input shape matches what the controller already builds when calling
 * evaluateAndGenerateNextQuestion(session, candidateAnswer).
 */

import { evaluateAndGenerateNextQuestion } from "../geminiService.js";

/**
 * Evaluate a candidate's answer using Gemini and generate the next question.
 *
 * @param {{ session: object, candidateAnswer: string }} params
 * @returns {Promise<GeminiEvaluation>}  — same shape as before:
 *   {
 *     evaluation: { answerQuality, relevance, clarity, completeness, technicalDepth },
 *     detectedIssues: [...],
 *     nextQuestion: string,
 *     questionRationale: string,
 *     followUpCategory: string
 *   }
 */
export async function evaluateTechnical({ session, candidateAnswer }) {
  // Delegates 100% to the existing service — zero logic change.
  const result = await evaluateAndGenerateNextQuestion(session, candidateAnswer);

  // Attach a normalised `score` so the aggregator has a consistent interface.
  const e = result.evaluation;
  result.score = Math.round(
    (e.answerQuality + e.relevance + e.clarity + e.completeness + e.technicalDepth) / 5
  );

  return result;
}