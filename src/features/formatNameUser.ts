export function formatNameUser(str: string): string {
  const maxLength = 9;
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}
