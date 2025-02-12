export function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * This function is identical to window.fetch, only it waits for a bit before
 * returning to simulate API request with latency.
 *
 * You can ignore it for the purposes of the pair programming session.
 */
export async function fetch(input: string | URL, init?: RequestInit) {
  await wait(550);
  return window.fetch(input, init);
}
