import style from "./leaderboardItem.module.scss";
import avatar from "../../assets/png/avatar.png";
import { LeaderboardGiftSvg } from "../../assets/svg/LeaderboardGiftSvg";
import iconCoin from "../../assets/webp/coin.webp";
import { memo } from "react";
import { useTelegram } from "../../hooks/telegram/telegram";
import { formatCoins } from "../../features/formatNumber";
import { ILeaderboardItem } from "../../types/liderBoardTypes";

export const LeaderboardItem = memo(
  ({ id, name, points, index, openModal }: ILeaderboardItem) => {
    const { tg } = useTelegram();
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
          <button
            onClick={() => {
              openModal();
              tg.HapticFeedback.impactOccurred("light");
            }}
            className={style.leaderboard__gift}
          >
            <LeaderboardGiftSvg className={style.leaderboard__svg} />
          </button>
        )}
        <h2 className={style.leaderboard__name}>
          {name == "undefined" ? "user" : name}
        </h2>
        <p className={style.leaderboard__coins}>{formatCoins(points)}</p>
        <img className={style.iconCoin} src={iconCoin} alt="" />
      </li>
    );
  }
);
