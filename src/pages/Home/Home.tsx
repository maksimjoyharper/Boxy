import style from "./Home.module.scss";
import skillbox from "../../assets/png/friends__invite.png";
import { HomeNavigation } from "../../components/homeNavigation/HomeNavigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";
import { SlidingGame } from "../../components/slidingGame";
import { SlidingNotTickets } from "../../components/slidingNotTickets/slidingNotTickets";
import { getCurrTickets } from "../../provider/StoreProvider/selectors/getCurrTicket";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotTicket, setIsNotTicket] = useState(false);
  const user = useSelector(getUser);
  const ticket = useSelector(getCurrTickets);
  const mediaQuery = useMediaQuery({
    query: "(max-height: 720px)",
  });

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
      <section className={style.home__section}>
        <HomeNavigation />
        <img
          onClick={handleOpen}
          className={
            mediaQuery
              ? classNames(style.img__mobile, style.imgBoxy)
              : style.imgBoxy
          }
          src={skillbox}
          alt="скиллбокс"
        />
      </section>
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

export default Home;
