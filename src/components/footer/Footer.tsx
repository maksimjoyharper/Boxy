import { ReactNode } from "react";
import style from "./Footer.module.scss";
import { FooterGameSvg } from "../../assets/svg/FooterGameSvg";
import { FooterMenuSvg } from "../../assets/svg/FooterMenuSvg";
import FooterHome from "../../assets/webp/footer__home.webp";
import { Link } from "react-router-dom";
import { getPathGame } from "../../features/getPathGame";

interface IFooter {
  id: number;
  path: string;
  icon: ReactNode;
  className?: boolean;
}

const footerArr: IFooter[] = [
  {
    id: 1,
    path: getPathGame(1),
    icon: <FooterGameSvg />,
    className: true,
  },
  {
    id: 2,
    path: "/",
    icon: (
      <img
        width={248}
        height={96}
        className={style.footer__home}
        src={FooterHome}
        alt="домой"
      />
    ),
  },
  {
    id: 3,
    path: "132",
    icon: <FooterMenuSvg />,
    className: true,
  },
];

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <nav>
        <ul className={style.footer__list}>
          {footerArr.map((elem) => (
            <li
              className={elem.className ? style.upper : undefined}
              key={elem.id}
            >
              <Link to={elem.path}>{elem.icon}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
