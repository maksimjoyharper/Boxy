export function randomBlue(): number {
  const result = Math.floor(Math.random() * (75 - 25 + 1)) + 15;

  return result;
}
