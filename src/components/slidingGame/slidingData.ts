import icon from "../../assets/png/friends__invite.png";
import icon2 from "../../assets/png/icon2.png";
import icon3 from "../../assets/png/icon3.png";

interface ISliding {
  id: number;
  img: string;
  buttonGo: string;
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
    buttonGo: "Дальше",
    label:
      "Тапаешь белую S = +1 балл Тапаешь синюю S = -3 балла Синяя S падает в Boxy = +3 балла",
  },
  {
    id: 3,
    img: icon3,
    buttonGo: "Понятно",
    label: "Тапаешь зелье = +15 секунд Тапаешь бомбочку = -10 баллов",
  },
];
