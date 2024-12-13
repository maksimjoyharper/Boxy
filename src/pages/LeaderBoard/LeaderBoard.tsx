import { useQuery } from "@tanstack/react-query";
import { PageUI } from "../../ui/PageUI/PageUI";
import { fetchLeaderboard } from "../../api/fetchLeaderboard/fetchLeaderboard";
import { queryClient } from "../../api/queryClient";
import { useTelegram } from "../../hooks/telegram/telegram";
import style from "./Leaderboard.module.scss";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";

import { SlidingLeaderboard } from "../../components/slidingLeaderboard";
import { useState } from "react";
import { LeaderboardItem } from "../../components/LeaderboardItem/LeaderboardItem";

const Leaderboard = () => {
  const user = useSelector(getUser);
  const { tg_id } = useTelegram();
  const [isOpen, setIsOpen] = useState(false);

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
      name={user?.name}
      coins={user?.points_all}
      gift={1}
      title="Leaderboard"
      time="До конца осталось: 12 дней 8 часов"
      isOpen={() => setIsOpen(true)}
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
      <SlidingLeaderboard
        fullHeight={"70"}
        initialHeight={"30"}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </PageUI>
  );
};

export default Leaderboard;
