import { v4 } from "uuid";
import { IBlueLettArr } from "../types/types";

export const blueLettArr: IBlueLettArr[] = [
  { id: v4(), duration: 3, x: 33 },
  //   { id: v4(), duration: Math.random() * 3 + 2, x: 40 },
  { id: v4(), duration: 1, x: 58 },
];
