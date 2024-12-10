import { useQuery } from "@tanstack/react-query";
import { PageUI } from "../../ui/PageUI/PageUI";
import { fetchLeaderboard } from "../../api/fetchLeaderboard/fetchLeaderboard";
import { queryClient } from "../../api/queryClient";
import { useTelegram } from "../../hooks/telegram/telegram";
import style from "./Leaderboard.module.scss";
import { LeaderboardItem } from "../../components/LeaderboardItem";

const Leaderboard = () => {
  const { tg_id } = useTelegram();

  const { data: leader } = useQuery(
    {
      queryFn: () => fetchLeaderboard(tg_id),
      queryKey: ["leaderboard"],
    },
    queryClient
  );

  return (
    <PageUI
      className={style.leader__section}
      className__title={style.leader__title}
      place={leader?.player_rank}
      title="Leaderboard"
      time="До конца осталось: 12 дней 8 часов"
    >
      <ul className={style.page__list}>
        {leader?.top_players.map((element, index) => (
          <LeaderboardItem
            index={index + 1}
            key={element.tg_id}
            id={element.tg_id}
            name={element.name}
            points={element.points}
          />
        ))}
      </ul>
    </PageUI>
  );
};

export default Leaderboard;
