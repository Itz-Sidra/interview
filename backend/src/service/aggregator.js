/**
 * Score Aggregator
 *
 * Combines scores from all evaluators into a single final score.
 * Weights are intentionally explicit so they can be tuned per interview type
 * in a future phase without touching evaluator files.
 *
 * Weights (must sum to 1.0):
 *   technical  40%  — answer quality, relevance, depth (Gemini)
 *   vocal      30%  — delivery, pace, confidence (future)
 *   linguistic 30%  — grammar, vocabulary, filler words (future)
 *
 * @param {{ technical: { score: number }, vocal: { score: number }, linguistic: { score: number } }} scores
 * @returns {number}  0–100 integer
 */
export function aggregateScores({ technical, vocal, linguistic }) {
  return Math.round(
    technical.score  * 0.4 +
    vocal.score      * 0.3 +
    linguistic.score * 0.3
  );
}