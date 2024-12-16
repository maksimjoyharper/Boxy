import { useState } from "react";
import style from "./Footer.module.scss";
import { FooterGameSvg } from "../../assets/svg/FooterGameSvg";
import FooterHome from "../../assets/webp/footer__home.webp";
import { Link } from "react-router-dom";
import { SlidingGame } from "../slidingGame";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";
import { FooterPopover } from "./footerPopover";

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
            <FooterPopover />
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
