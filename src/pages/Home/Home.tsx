import style from "./Home.module.scss";
import skillbox from "../../assets/png/friends__invite.png";
import { HomeNavigation } from "../../components/homeNavigation/HomeNavigation";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className={style.home__section}>
      <HomeNavigation />
      <img
        onClick={() => navigate("game")}
        className={style.imgBoxy}
        src={skillbox}
        alt="скиллбокс"
      />
    </section>
  );
};

export default Home;
