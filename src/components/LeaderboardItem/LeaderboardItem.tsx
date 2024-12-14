// import { LeaderboardItemSvg } from "../../assets/svg/LeaderboardItemSvg";
import style from "./leaderboardItem.module.scss";
import avatar from "../../assets/png/avatar.png";
import { LeaderboardGiftSvg } from "../../assets/svg/LeaderboardGiftSvg";
import iconCoin from "../../assets/webp/coin.webp";

interface ILeaderboardItem {
  id: number;
  name: string;
  points: number;
  index: number;
  openModal: () => void;
}

export const LeaderboardItem = ({
  id,
  name,
  points,
  index,
  openModal,
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
      {index === 1 && (
        <button onClick={openModal} className={style.leaderboard__gift}>
          <LeaderboardGiftSvg className={style.leaderboard__svg} />
        </button>
      )}
      <h2 className={style.leaderboard__name}>{name}</h2>
      <p className={style.leaderboard__coins}>{points}</p>
      {/* <LeaderboardItemSvg /> */}
      <img className={style.iconCoin} src={iconCoin} alt="" />
    </li>
  );
};
