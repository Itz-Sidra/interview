/**
 * Vocal Evaluator (Placeholder)
 *
 * Will be replaced with real vocal analysis (e.g., ElevenLabs audio metrics,
 * pitch/pace/filler-word detection) in a future phase.
 *
 * Returns a fixed shape that the aggregator depends on so the interface
 * contract is established now.
 *
 * @param {string} transcript
 * @returns {{ score: number, confidence: string, message: string }}
 */
export function evaluateVocal(transcript) {
  return {
    score: 80,
    confidence: "high",
    message: "Placeholder — will be replaced with real vocal analysis later"
  };
}