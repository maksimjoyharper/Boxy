import { ReactNode } from "react";
import style from "./Footer.module.scss";
import { FooterGameSvg } from "../../assets/svg/FooterGameSvg";
import { FooterMenuSvg } from "../../assets/svg/FooterMenuSvg";
import FooterHome from "../../assets/webp/footer__home.webp";
import { Link } from "react-router-dom";
import { getPathGame } from "../../features/getPathGame";
import classNames from "classnames";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { footerNavArr } from "./footerNavData";

interface IFooterOpen {
  isOpen?: () => void;
}

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
];

export const Footer = ({ isOpen }: IFooterOpen) => {
  return (
    <footer className={style.footer}>
      <nav>
        <ul className={style.footer__list}>
          {footerArr.map((elem) => (
            <li
              className={classNames(elem.className && style.upper)}
              key={elem.id}
            >
              <Link onClick={isOpen} to={elem.path}>
                {elem.icon}
              </Link>
            </li>
          ))}
          <li>
            <Popover>
              <PopoverButton
                className={classNames(style.footer__button, style.upper)}
              >
                <FooterMenuSvg />
              </PopoverButton>
              <PopoverPanel className={style.footerNav__list} anchor="bottom">
                {footerNavArr.map((item) => (
                  <Link
                    key={item.id}
                    className={style.footerNav__link}
                    to={item.path}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
              </PopoverPanel>
            </Popover>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
