type InputType = string | number | boolean;

export const formatNumber = (input: InputType): string | undefined => {
  if (typeof input === "number") {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  return undefined;
};

export function formatCoins(num: number): string {
  let rounded;
  if (num >= 1_000_000_000) {
    rounded = Math.floor((num / 1_000_000_000) * 10) / 10;
    return rounded + "B";
  } else if (num >= 1_000_000) {
    rounded = Math.floor((num / 1_000_000) * 10) / 10;
    return rounded + "M";
  } else if (num >= 10_000) {
    rounded = Math.floor((num / 10_000) * 100) / 10;
    return rounded + "K";
  } else {
    return Math.floor(num * 10) / 10 + "";
  }
}
