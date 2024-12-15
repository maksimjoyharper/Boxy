import { ReactNode } from "react";
import { HomeLeaderSvg } from "../../assets/svg/HomeLeaderSvg";
import { HomeCatalogSvg } from "../../assets/svg/HomeCatalogSvg";
import { HomeTaskSvg } from "../../assets/svg/HomeTaskSvg";

export interface IFooter {
  id: number;
  label: string;
  icon: ReactNode;
  path: string;
}

export const footerNavArr: IFooter[] = [
  {
    id: 1,
    label: "Лидерборд",
    icon: <HomeLeaderSvg />,
    path: "leaderboard",
  },
  {
    id: 2,
    label: "Каталог",
    icon: <HomeCatalogSvg />,
    path: "catalog",
  },
  {
    id: 3,
    label: "Задания",
    icon: <HomeTaskSvg />,
    path: "tasks",
  },
];
