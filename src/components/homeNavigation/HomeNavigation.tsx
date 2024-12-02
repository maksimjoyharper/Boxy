import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { HomeLeaderSvg } from "../../assets/svg/HomeLeaderSvg";
import { HomeCatalogSvg } from "../../assets/svg/HomeCatalogSvg";
import { HomeTaskSvg } from "../../assets/svg/HomeTaskSvg";
import { HomeFriendsSvg } from "../../assets/svg/HomeFriendsSvg";
import style from "./HomeNavigation.module.scss";

interface IHome {
  id: number;
  path: string;
  title: string;
  label?: string;
  svg?: ReactNode;
  reverse?: boolean;
}

const homeArr: IHome[] = [
  {
    id: 1,
    title: "Лидерборд",
    path: "leaderboard",
    label: "#123",
    svg: <HomeLeaderSvg />,
  },
  {
    id: 2,
    title: "Каталог",
    path: "catalog",
    svg: <HomeCatalogSvg />,
    reverse: true,
  },
  {
    id: 3,
    title: "Билетов",
    path: "leaderboard",
    label: "5",
  },
  {
    id: 4,
    title: "Задания",
    path: "leaderboard",
    svg: <HomeTaskSvg />,
    reverse: true,
  },
  {
    id: 5,
    title: "Друзей",
    path: "leaderboard",
    label: "10",
    svg: <HomeFriendsSvg />,
  },
];

export const HomeNavigation = () => {
  return (
    <ul className={style.home__grid}>
      {homeArr.map((elem) => (
        <li key={elem.id}>
          <Link className={style.home__link} to={elem.path}>
            {elem.label && <p className={style.home__label}>{elem.label}</p>}
            <div className={elem.reverse ? style.reverse : undefined}>
              <p className={style.home__title}>{elem.title}</p>
              {elem.svg}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
