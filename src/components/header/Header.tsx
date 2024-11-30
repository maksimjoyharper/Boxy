import style from "./Header.module.scss";
import logo from "../../assets/webp/logo.webp";
import avatar from "../../assets/webp/avatar.png";
import coin from "../../assets/webp/coin.webp";

interface IHeader {
  img: string;
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
    img: coin,
    label: "12 000",
    reverse: true,
  },
];

export const Header = () => {
  return (
    <header>
      <ul className={style.header__list}>
        {headerArr.map((elem) => (
          <li className={elem.reverse ? style.reverse : undefined}>
            <img src={elem.img} alt="аватарка" />
            <span>{elem.label}</span>
          </li>
        ))}
      </ul>
    </header>
  );
};
