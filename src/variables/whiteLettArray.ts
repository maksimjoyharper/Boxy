import { v4 } from "uuid";
import { IWhiteLettArr } from "../types/types";

export const whiteLettArr: IWhiteLettArr[] = [
  { id: v4(), duration: Math.random() * 3 + 2, x: 10 },
  //   { id: v4(), duration: Math.random() * 3 + 2, x: 20 },
  { id: v4(), duration: Math.random() * 3 + 2, x: 30 },
  //   { id: v4(), duration: Math.random() * 3 + 2, x: 40 },
  { id: v4(), duration: Math.random() * 3 + 2, x: 50 },
  //   { id: v4(), duration: Math.random() * 3 + 2, x: 60 },
  { id: v4(), duration: Math.random() * 3 + 2, x: 70 },
  { id: v4(), duration: Math.random() * 3 + 2, x: 85 },
];
