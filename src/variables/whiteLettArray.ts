import { v4 } from "uuid";
import { IWhiteLettArr } from "../types/types";

export const whiteLettArr: IWhiteLettArr[] = [
  { id: v4(), duration: Math.random() * 3 + 2, x: 5 },
  //   { id: v4(), duration: Math.random() * 3 + 2, x: 20 },
  { id: v4(), duration: Math.random() * 3 + 2, x: 25 },
  //   { id: v4(), duration: Math.random() * 3 + 2, x: 40 },
  { id: v4(), duration: Math.random() * 3 + 2, x: 45 },
  //   { id: v4(), duration: Math.random() * 3 + 2, x: 60 },
  { id: v4(), duration: Math.random() * 3 + 2, x: 65 },
  { id: v4(), duration: Math.random() * 3 + 2, x: 82 },
];
