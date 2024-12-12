export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
  const year = String(date.getUTCFullYear()).slice(-2); // Берем последние 2 цифры года

  return `${day}.${month}.${year}`;
}
