export function randomWhite(): string {
  const result = Math.floor(Math.random() * (90 - 10 + 1)) + 10;

  return result.toString();
}
