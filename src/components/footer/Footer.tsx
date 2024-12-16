import { useState } from "react";
import style from "./Footer.module.scss";
import { FooterGameSvg } from "../../assets/svg/FooterGameSvg";
import { FooterMenuSvg } from "../../assets/svg/FooterMenuSvg";
import FooterHome from "../../assets/webp/footer__home.webp";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { footerNavArr } from "./footerNavData";
import { SlidingGame } from "../slidingGame";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(getUser);

  const handleOpen = () => {
    if (user) {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <footer className={style.footer}>
        <nav>
          <ul className={style.footer__list}>
            <li className={style.upper}>
              <button onClick={handleOpen} className={style.footer__game}>
                <FooterGameSvg />
              </button>
            </li>
            <li>
              <Link to={"/"}>
                <img
                  width={248}
                  height={96}
                  className={style.footer__home}
                  src={FooterHome}
                  alt="домой"
                />
              </Link>
            </li>
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
      <SlidingGame
        user={user}
        fullHeight={"75vh"}
        initialHeight={"75%"}
        onClose={handleClose}
        isOpen={isOpen}
      />
    </>
  );
};
