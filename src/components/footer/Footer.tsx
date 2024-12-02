import { ReactNode } from "react";
import style from "./Footer.module.scss";
import { FooterGameSvg } from "../../assets/svg/FooterGameSvg";
import { FooterMenuSvg } from "../../assets/svg/FooterMenuSvg";
import FooterHome from "../../assets/png/footer__home.png";
import { Link } from "react-router-dom";

interface IFooter {
  id: number;
  path: string;
  icon: ReactNode;
  className?: boolean;
}

const footerArr: IFooter[] = [
  {
    id: 1,
    path: "game",
    icon: <FooterGameSvg />,
    className: true,
  },
  {
    id: 2,
    path: "/",
    icon: <img className={style.footer__home} src={FooterHome} alt="домой" />,
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
