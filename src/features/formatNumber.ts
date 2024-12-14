type InputType = string | number | boolean;

export const formatNumber = (input: InputType): string | undefined => {
  if (typeof input === "number") {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  return undefined;
};
