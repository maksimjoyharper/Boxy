import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import slidingPrize from "../../assets/png/sliding__prize.png";
import style from "./slidingLeaderboard.module.scss";

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
  return (
    <SlidingPanel
      darkened
      initialHeight={initialHeight}
      fullHeight={fullHeight}
      isOpen={isOpen}
      onClose={onClose}
    >
      <img className={style.sliding__image} src={slidingPrize} alt="" />
      <h3 className={style.sliding__title}>Супер-приз ждет тебя!</h3>
      <p className={style.sliding__label}>
        15 декабря игрок, который наберет наибольшее количество баллов, получит
        супер-приз — iPhone 16!
      </p>
      <button onClick={onClose} className={style.sliding__button}>
        Ура!
      </button>
    </SlidingPanel>
  );
};
