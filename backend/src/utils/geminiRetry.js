/**
 * Wraps a Gemini API call with:
 *  - timeout (default 5 s)
 *  - exponential backoff retries (default 2 retries: 1 s, 2 s)
 *  - structured logging
 */
export async function withGeminiRetry(fn, { retries = 2, timeoutMs = 5000, label = "gemini" } = {}) {
  const delays = [1000, 2000];

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Race the Gemini call against a timeout
      const result = await Promise.race([
        fn(),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("GEMINI_TIMEOUT")), timeoutMs)
        )
      ]);

      if (attempt > 0) {
        console.log(`[${label}] succeeded on attempt ${attempt + 1}`);
      }
      return result;

    } catch (err) {
      const isRetryable =
        err.message === "GEMINI_TIMEOUT" ||
        err?.status === 503 ||
        err?.status === 429 ||
        err?.message?.includes("503") ||
        err?.message?.includes("429") ||
        err?.message?.includes("Quota") ||
        err?.message?.includes("unavailable");

      if (!isRetryable || attempt === retries) {
        console.error(`[${label}] failed after ${attempt + 1} attempt(s): ${err.message}`);
        throw err;
      }

      const delay = delays[attempt] ?? 2000;
      console.warn(`[${label}] attempt ${attempt + 1} failed (${err.message}). Retrying in ${delay}ms…`);
      await new Promise(r => setTimeout(r, delay));
    }
  }
}