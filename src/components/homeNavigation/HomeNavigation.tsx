import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { HomeLeaderSvg } from "../../assets/svg/HomeLeaderSvg";
import { HomeCatalogSvg } from "../../assets/svg/HomeCatalogSvg";
import { HomeTaskSvg } from "../../assets/svg/HomeTaskSvg";
import { HomeFriendsSvg } from "../../assets/svg/HomeFriendsSvg";
import style from "./homeNavigation.module.scss";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";

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
    title: "Задания",
    path: "leaderboard",
    svg: <HomeTaskSvg />,
    reverse: true,
  },
  {
    id: 4,
    title: "Друзей",
    path: "leaderboard",
    label: "10",
    svg: <HomeFriendsSvg />,
  },
];

export const HomeNavigation = () => {
  const [selectedTicket, setSelectedTicket] = useState("regular");
  const user = useSelector(getUser);

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
      <li className={style.tickets__switcher}>
        <label
          className={`${
            selectedTicket === "regular"
              ? `${style.label__tickets} ${style.active}`
              : style.label__tickets
          }`}
          htmlFor="tickets"
        >
          {user?.tickets}
          <input
            checked={selectedTicket === "regular"}
            onChange={() => setSelectedTicket("regular")}
            id="tickets"
            name="tickets"
            type="radio"
          />
        </label>
        <label
          className={`${
            selectedTicket === "premium"
              ? `${style.label__tickets} ${style.active}`
              : style.label__tickets
          }`}
          htmlFor="premium-tickets"
        >
          {user?.premium_tickets}
          <input
            checked={selectedTicket === "premium"}
            onChange={() => setSelectedTicket("premium")}
            name="tickets"
            type="radio"
          />
        </label>
      </li>
    </ul>
  );
};
