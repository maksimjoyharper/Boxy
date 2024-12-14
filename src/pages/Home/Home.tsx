import style from "./Home.module.scss";
import skillbox from "../../assets/png/friends__invite.png";
import { HomeNavigation } from "../../components/homeNavigation/HomeNavigation";
import { useNavigate } from "react-router-dom";
import { SlidingGame } from "../../components/slidingGame";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
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
