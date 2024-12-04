import style from "./Header.module.scss";
import logo from "../../assets/webp/logo.webp";
import avatar from "../../assets/webp/avatar.png";
import { ReactNode } from "react";
import { HeaderCoinSvg } from "../../assets/svg/HeaderCoinSvg";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { fetchUser } from "../../api/fetchUser/fetchUser";
import { useTelegram } from "../../hooks/telegram/telegram";

interface IHeader {
  id: number;
  svg?: ReactNode;
  img?: string;
  label?: string;
  reverse?: boolean;
}

const headerArr: IHeader[] = [
  {
    id: 1,
    img: avatar,
    label: "Name",
  },
  {
    id: 2,
    img: logo,
  },
  {
    id: 3,
    svg: <HeaderCoinSvg />,
    label: "12 000",
    reverse: true,
  },
];

export const Header = () => {
  const {tg_id} = useTelegram()

  const {data: user} = useQuery({
    queryKey: ['user'],
    queryFn: () => fetchUser(tg_id)
  }, queryClient)

  return (
    <header>
      <ul className={style.header__list}>
        {headerArr.map((elem) => (
          <li key={elem.id} className={elem.reverse ? style.reverse : undefined}>
            {elem.svg ? elem.svg : <img src={elem.img} alt={elem.label} />}
            <span>{elem.label}</span>
            <p>{user?.id}</p>
          </li>
        ))}
      </ul>
    </header>
  );
};
