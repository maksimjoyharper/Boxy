import style from "./Header.module.scss";
import logo from "../../assets/webp/logo.webp";
import avatar from "../../assets/webp/avatar.png";
import { ReactNode } from "react";
import { HeaderCoinSvg } from "../../assets/svg/HeaderCoinSvg";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../api/fetchUser/fetchUser";
import { useTelegram } from "../../hooks/telegram/telegram";
import { queryClient } from "../../api/queryClient";

interface IHeader {
  svg?: ReactNode;
  img?: string;
  label?: string;
  reverse?: boolean;
}

const headerArr: IHeader[] = [
  {
    img: avatar,
    label: "Name",
  },
  {
    img: logo,
  },
  {
    svg: <HeaderCoinSvg />,
    label: "12 000",
    reverse: true,
  },
];

export const Header = () => {
  const { tg_id } = useTelegram();

  const { user } = useQuery(
    {
      queryFn: () => fetchUser(tg_id),
      queryKey: ["user"],
    },
    queryClient
  );

  return (
    <header>
      <ul className={style.header__list}>
        {headerArr.map((elem) => (
          <li className={elem.reverse ? style.reverse : undefined}>
            {elem.svg ? elem.svg : <img src={elem.img} alt={elem.label} />}
            <span>{elem.label}</span>
          </li>
        ))}
      </ul>
    </header>
  );
};
