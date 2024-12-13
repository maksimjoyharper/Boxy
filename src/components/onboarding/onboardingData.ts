import onboarding__one from "../../assets/png/onboarding__one.png";
import onboarding__two from "../../assets/png/onboarding__two.png";
import onboarding__three from "../../assets/png/onboarding__three.png";
import onboarding__four from "../../assets/png/onboarding__four.png";
import onboarding__five from "../../assets/png/onboarding__five.png";
import onboarding__six from "../../assets/png/onboarding__six.png";
import onboarding__seven from "../../assets/png/onboarding__seven.png";

export interface IOboarding {
  id: number;
  title: string;
  label: string;
  image: string;
}

export const onboardingArr: IOboarding[] = [
  {
    id: 1,
    title: "Привет!",
    image: onboarding__one,
    label:
      "Я Boxy, полон знаний, навыков и люблю ими делиться. А ещё у меня много сюрпризов! Тапай и забирай подарки!",
  },
  {
    id: 2,
    title: "Лидерборд",
    image: onboarding__two,
    label: "Рейтинг игроков, где ты можешь отслеживать свое место",
  },
  {
    id: 3,
    title: "Каталог",
    image: onboarding__three,
    label: "Бонусы и подарки",
  },
  {
    id: 4,
    title: "Задания",
    image: onboarding__four,
    label: "Выполняй задания и получай дополнительные баллы",
  },
  {
    id: 5,
    title: "Друзья",
    image: onboarding__five,
    label: "Приглашай друзей, чтобы играть вместе, и получай награды!",
  },
  {
    id: 6,
    title: "Билеты",
    image: onboarding__six,
    label:
      "Каждый день ты получаешь от 1 до 4 стандартных билетов  (1 билет = 1 игра)",
  },

  {
    id: 7,
    title: "Премиум-билеты",
    image: onboarding__seven,
    label: " Билеты, которые удваивают положительные баллы в игре",
  },
];
