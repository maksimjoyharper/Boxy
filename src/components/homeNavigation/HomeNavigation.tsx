import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { HomeLeaderSvg } from "../../assets/svg/HomeLeaderSvg";
import { HomeCatalogSvg } from "../../assets/svg/HomeCatalogSvg";
import { HomeTaskSvg } from "../../assets/svg/HomeTaskSvg";
import { HomeFriendsSvg } from "../../assets/svg/HomeFriendsSvg";
import style from "./homeNavigation.module.scss";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";
import { HomeTickets } from "./homeTickets";

interface IHome {
  id: number;
  path: string;
  title: string;
  svg?: ReactNode;
  reverse?: boolean;
}

const homeArr: IHome[] = [
  {
    id: 1,
    title: "Лидерборд",
    path: "leaderboard",
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
    title: "Задания",
    path: "tasks",
    svg: <HomeTaskSvg />,
    reverse: true,
  },
  {
    id: 4,
    title: "Друзей",
    path: "friends",
    svg: <HomeFriendsSvg />,
  },
];

export const HomeNavigation = () => {
  const user = useSelector(getUser);

  return (
    <ul className={style.home__grid}>
      {homeArr.map((elem) => (
        <li key={elem.id}>
          <Link className={style.home__link} to={elem.path}>
            {elem.title === "Лидерборд" && (
              <p className={style.home__label}>#{user?.rank}</p>
            )}
            {elem.title === "Друзей" && (
              <p className={style.home__label}>{user?.friends_count}</p>
            )}
            <div className={elem.reverse ? style.reverse : undefined}>
              <p className={style.home__title}>{elem.title}</p>
              {elem.svg}
            </div>
          </Link>
        </li>
      ))}
      <li className={style.tickets__switcher}>
        <HomeTickets user={user} />
      </li>
    </ul>
  );
};
