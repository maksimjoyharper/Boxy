import style from "./Home.module.scss";
import skillbox from "../../assets/png/friends__invite.png";
import { HomeNavigation } from "../../components/homeNavigation/HomeNavigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";
import { SlidingGame } from "../../components/slidingGame";

const Home = () => {
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
        fullHeight={"75vh"}
        initialHeight={"75%"}
        onClose={handleClose}
        isOpen={isOpen}
      />
    </>
  );
};

export default Home;
