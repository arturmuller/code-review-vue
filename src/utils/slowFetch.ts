export function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function fetch(input: string | URL, init?: RequestInit) {
  await wait(550);
  return window.fetch(input, init);
}
