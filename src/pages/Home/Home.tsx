import style from "./Home.module.scss";
import skillbox from "../../assets/png/friends__invite.png";
import { HomeNavigation } from "../../components/homeNavigation/HomeNavigation";

import { SlidingGame } from "../../components/slidingGame";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";
import { useNavigate } from "react-router-dom";
import { getCurrTickets } from "../../provider/StoreProvider/selectors/getCurrTicket";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const ticket = useSelector(getCurrTickets);
  const handleOpen = () => {
    if (user) {
      if (user?.instruction) {
        setIsOpen(true);
      } else {
        if (user?.tickets > 0 && ticket === true) {
          navigate("game");
        } else if (user.premium_tickets > 0 && ticket === false) {
          navigate("game");
        }
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className={style.home__section}>
        <HomeNavigation />
        <img
          onClick={handleOpen}
          className={style.imgBoxy}
          src={skillbox}
          alt="скиллбокс"
        />
      </section>
      <SlidingGame
        user={user}
        fullHeight={"70vh"}
        initialHeight={"70%"}
        onClose={handleClose}
        isOpen={isOpen}
      />
    </>
  );
};

export default Home;
