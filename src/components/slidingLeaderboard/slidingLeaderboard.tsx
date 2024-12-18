import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import slidingPrize from "../../assets/webp/sliding__prize.webp";
import style from "./slidingLeaderboard.module.scss";
import { useTelegram } from "../../hooks/telegram/telegram";

interface SlidingProps {
  initialHeight: string;
  fullHeight: string;
  isOpen: boolean;
  onClose: () => void;
}

export const SlidingLeaderboard = ({
  initialHeight,
  fullHeight,
  isOpen,
  onClose,
}: SlidingProps) => {
  const { tg } = useTelegram();
  return (
    <SlidingPanel
      darkened
      initialHeight={initialHeight}
      fullHeight={fullHeight}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={style.sliding__block}>
        <img
          width={196}
          height={196}
          className={style.sliding__image}
          src={slidingPrize}
          alt=""
        />
        <h3 className={style.sliding__title}>Супер-приз ждет тебя!</h3>
        <p className={style.sliding__label}>
          15 декабря игрок, который наберет наибольшее количество баллов,
          получит супер-приз — iPhone 16!
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
