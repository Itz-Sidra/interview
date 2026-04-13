/**
 * Linguistic Evaluator (Placeholder)
 *
 * Will be replaced with real NLP analysis (grammar, filler words, sentence
 * structure, vocabulary range) in a future phase.
 *
 * Returns a fixed shape that the aggregator depends on so the interface
 * contract is established now.
 *
 * @param {string} transcript
 * @returns {Promise<{ score: number, confidence: string, message: string }>}
 */
export async function evaluateLinguistic(transcript) {
  return {
    score: 75,
    confidence: "medium",
    message: "Placeholder — will be replaced with real linguistic analysis later"
  };
}