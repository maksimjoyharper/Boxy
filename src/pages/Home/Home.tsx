import { HomeNavigation } from "../../components/homeNavigation/HomeNavigation";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <section className={style.home}>
      <HomeNavigation />
    </section>
  );
};

export default Home;
