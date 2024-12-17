import { useState } from "react";
import style from "./Footer.module.scss";
import { FooterGameSvg } from "../../assets/svg/FooterGameSvg";
import FooterHome from "../../assets/webp/footer__home.webp";
import { Link } from "react-router-dom";
import { SlidingGame } from "../slidingGame";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";
import { FooterPopover } from "./footerPopover";
import { getCurrTickets } from "../../provider/StoreProvider/selectors/getCurrTicket";
import { SlidingNotTickets } from "../slidingNotTickets/slidingNotTickets";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotTicket, setIsNotTicket] = useState(false);
  const user = useSelector(getUser);
  const ticket = useSelector(getCurrTickets);

  const handleOpen = () => {
    if (user) {
      if (user?.tickets > 0 && ticket === true) {
        setIsOpen(true);
      } else if (user.premium_tickets > 0 && ticket === false) {
        setIsOpen(true);
      } else if (user?.tickets <= 0 && ticket === true) {
        setIsNotTicket(true);
      } else if (user.premium_tickets >= 0 && ticket === false) {
        setIsNotTicket(true);
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsNotTicket(false);
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
      <SlidingNotTickets
        fullHeight={"40vh"}
        initialHeight={"40%"}
        isOpen={isNotTicket}
        onClose={handleClose}
      />
    </>
  );
};
