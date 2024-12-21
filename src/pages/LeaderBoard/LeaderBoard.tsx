import { PageUI } from "../../ui/PageUI/PageUI";
import { useTelegram } from "../../hooks/telegram/telegram";
import style from "./Leaderboard.module.scss";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";
import { SlidingLeaderboard } from "../../components/slidingLeaderboard";
import { useState } from "react";
import { LeaderboardItem } from "../../components/leaderboardItem/LeaderboardItem";
import { useLeaderboard } from "../../hooks/useHooks/useLeaderboard";

const Leaderboard = () => {
  const user = useSelector(getUser);
  const { tg, tg_id } = useTelegram();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    tg.HapticFeedback.impactOccurred("light");
  };

  const handleOpen = () => {
    setIsOpen(true);
    tg.HapticFeedback.impactOccurred("light");
  };

  const { data: leader } = useLeaderboard(tg_id);

  return (
    <>
      <PageUI
        className={style.leader__section}
        className__title={style.leader__title}
        place={leader?.player_rank}
        name={user?.name}
        coins={user?.points_all}
        gift={Number(leader?.player_rank) === 1}
        title="Leaderboard"
        time="Розыгрыш уже совсем скоро!"
        isOpen={handleOpen}
      >
        <ul className={style.page__list}>
          {leader?.top_players.map((element, index) => (
            <LeaderboardItem
              openModal={handleOpen}
              index={index + 1}
              key={element.tg_id}
              id={element.tg_id}
              name={element.name}
              points={element.points}
            />
          ))}
        </ul>
      </PageUI>
      <SlidingLeaderboard
        isOpen={isOpen}
        onClose={handleClose}
        initialHeight={"70%"}
        fullHeight={"70vh"}
      />
    </>
  );
};

export default Leaderboard;
