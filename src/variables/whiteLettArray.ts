import { v4 } from "uuid";
import { IWhiteLettArr } from "../types/types";
import imgL from "../assets/S-white.png";

const imageSrc = imgL; // Замените на URL вашего изображения
const image = new Image();
image.src = imageSrc;

export const whiteLettArr: IWhiteLettArr[] = [
  { id: v4(), y: 0, x: 10, image: image },
  //   { id: v4(), duration: Math.random() * 3 + 2, x: 20 },
  { id: v4(), y: 0, x: 30, image: image },
  //   { id: v4(), duration: Math.random() * 3 + 2, x: 40 },
  { id: v4(), y: 0, x: 50, image: image },
  //   { id: v4(), duration: Math.random() * 3 + 2, x: 60 },
  { id: v4(), y: 0, x: 70, image: image },
  { id: v4(), y: 0, x: 85, image: image },
];
