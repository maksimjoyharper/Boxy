import icon from "../../assets/webp/game-rules/one.webp";
import icon2 from "../../assets/webp/game-rules/two.webp";
import icon3 from "../../assets/webp/game-rules/three.webp";

interface ISliding {
  id: number;
  img: string;
  buttonGo?: string;
  buttonNext?: string;
  buttonInst?: string;
  title?: string;
  label?: string;
}

export const slidingArr: ISliding[] = [
  {
    id: 1,
    img: icon,
    buttonGo: "Нет, играть",
    buttonInst: "Посмотреть правила",
    title: "Рассказать правила игры?",
  },
  {
    id: 2,
    img: icon2,
    buttonNext: "Дальше",
    label:
      "Тапаешь белую S = +1 балл Тапаешь синюю S = -3 балла Синяя S падает в Boxy = +3 балла",
  },
  {
    id: 3,
    img: icon3,
    buttonGo: "Понятно",
    label: "Тапаешь зелье = +5 секунд Тапаешь бомбочку = -10 баллов",
  },
];
