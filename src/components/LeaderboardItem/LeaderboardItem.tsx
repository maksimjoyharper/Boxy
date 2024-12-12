import { LeaderboardItemSvg } from "../../assets/svg/LeaderboardItemSvg";
import style from "./leaderboardItem.module.scss";
import avatar from "../../assets/png/avatar.png";

interface ILeaderboardItem {
  id: number;
  name: string;
  points: number;
  index: number;
}

export const LeaderboardItem = ({
  id,
  name,
  points,
  index,
}: ILeaderboardItem) => {
  return (
    <li
      className={
        index <= 3
          ? `${style.back} ${style.leaderboard__item}`
          : style.leaderboard__item
      }
      key={id}
    >
      <span className={style.leaderboard__index}>{index}</span>
      <img className={style.leaderboard__avatar} src={avatar} alt="avatar" />
      <h2 className={style.leaderboard__name}>{name}</h2>
      <p className={style.leaderboard__coins}>{points}</p>
      <LeaderboardItemSvg />
    </li>
  );
};
