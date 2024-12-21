import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import friendsInvite from "../../assets/png/friends__invite.png";
import style from "./slidingFriends.module.scss";
import { HeaderCoinSvg } from "../../assets/svg/HeaderCoinSvg";
import { useTelegram } from "../../hooks/telegram/telegram";
import { ISlidingFriends } from "../../types/friendsTypes";

export const SlidingFriends = ({
  isOpen,
  onClose,
  fullHeight,
  initialHeight,
}: ISlidingFriends) => {
  const { tg } = useTelegram();
  return (
    <SlidingPanel
      initialHeight={initialHeight}
      fullHeight={fullHeight}
      darkened
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={style.sliding__block}>
        <img
          className={style.sliding__image}
          width={215}
          height={215}
          src={friendsInvite}
          alt=""
        />
        <h2 className={style.sliding__title}>Твоя награда:</h2>
        <p className={style.sliding__label}>
          <HeaderCoinSvg />
          <span className={style.count_coin}>500</span>
        </p>
        <button
          onClick={() => {
            onClose();
            tg.HapticFeedback.impactOccurred("light");
          }}
          className={style.sliding__button}
        >
          Ура!
        </button>
      </div>
    </SlidingPanel>
  );
};
