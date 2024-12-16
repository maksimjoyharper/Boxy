import onboarding__one from "../../assets/webp/onboarding/onb__one.webp";
import onboarding__two from "../../assets/webp/onboarding/onb__two.webp";
import onboarding__three from "../../assets/webp/onboarding/onb__three.webp";
import onboarding__four from "../../assets/webp/onboarding/onb__four.webp";
import onboarding__five from "../../assets/webp/onboarding/onb__five.webp";
import onboarding__six from "../../assets/webp/onboarding/onb__six.webp";
import onboarding__seven from "../../assets/webp/onboarding/onb__seven.webp";

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
