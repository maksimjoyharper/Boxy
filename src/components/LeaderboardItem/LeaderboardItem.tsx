import { LeaderboardItemSvg } from "../../assets/svg/LeaderboardItemSvg";
import style from "./leaderboardItem.module.scss";

interface ILeaderboardItem {
  id: number;
  name: string;
  points: number;
  index?: number;
}

export const LeaderboardItem = ({
  id,
  name,
  points,
  index,
}: ILeaderboardItem) => {
  return (
    <li className={style.leaderboard__item} key={id}>
      <span>{index}</span>
      <img className={style.leaderboard__avatar} src="" alt="avatar" />
      <h2 className={style.leaderboard__name}>{name}</h2>
      <p className={style.leaderboard__coins}>{points}</p>
      <LeaderboardItemSvg />
    </li>
  );
};
