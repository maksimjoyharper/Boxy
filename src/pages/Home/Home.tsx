import { HomeNavigation } from "../../components/homeNavigation/HomeNavigation";
import style from "./Home.module.scss";
import skillbox from "../../assets/webp/skillbox__bot.webp";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { getUser } from "../../api/user/user";
import { useTelegram } from "../../hooks/telegram/telegram";

const Home = () => {
  const { tg_id, userName } = useTelegram();

  const { data } = useQuery(
    {
      queryKey: ["userData"],
      queryFn: () => getUser(tg_id, userName),
    },
    queryClient
  );

  console.log(data);

  return (
    <section className={style.home__section}>
      <HomeNavigation />
      <img src={skillbox} alt="скиллбокс" />
    </section>
  );
};

export default Home;
