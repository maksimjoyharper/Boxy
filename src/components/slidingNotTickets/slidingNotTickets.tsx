import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import style from "./slidingNotTickets.module.scss";
import notFound from "../../assets/webp/sliding__not__ticket.webp";

interface ISliding {
  isOpen: boolean;
  onClose: () => void;
  initialHeight: string;
  fullHeight: string;
}

export const SlidingNotTickets = ({
  isOpen,
  onClose,
  fullHeight,
  initialHeight,
}: ISliding) => {
  return (
    <SlidingPanel
      initialHeight={initialHeight}
      fullHeight={fullHeight}
      darkened
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={style.sliding__not__block}>
        <img width={92} height={92} src={notFound} alt="синий билет" />
        <h2 className={style.sliding__not__title}>Недостаточно билетов!</h2>
        <button className={style.sliding__not__button} onClick={onClose}>
          На главный экран
        </button>
      </div>
    </SlidingPanel>
  );
};
