import style from "./Home.module.scss";
import skillbox from "../../assets/png/friends__invite.png";
import { HomeNavigation } from "../../components/homeNavigation/HomeNavigation";

import { SlidingGame } from "../../components/slidingGame";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const handleOpen = () => {
    // console.log(user?.instruction);

    if (user?.instruction) {
      setIsOpen(true);
    } else navigate("game");
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
        fullHeight={"70vh"}
        initialHeight={"70%"}
        onClose={handleClose}
        isOpen={isOpen}
      />
    </>
  );
};

export default Home;
