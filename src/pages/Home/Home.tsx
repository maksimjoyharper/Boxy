import { HomeNavigation } from "../../components/homeNavigation/HomeNavigation";
import style from "./Home.module.scss";
import skillbox from "../../assets/webp/skillbox__bot.webp";

const Home = () => {
  return (
    <section className={style.home__section}>
      <HomeNavigation />
      <img src={skillbox} alt="скиллбокс" />
    </section>
  );
};

export default Home;
