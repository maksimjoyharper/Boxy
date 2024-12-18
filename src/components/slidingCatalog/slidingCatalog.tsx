import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import style from "./slidingCatalog.module.scss";
import slide from "../../assets/webp/sliding__catalog.webp";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";

interface ISliding {
  isOpen: boolean;
  onClose: () => void;
  initialHeight: string;
  fullHeight: string;
}

export const SlidingCatalog = ({
  isOpen,
  onClose,
  initialHeight,
  fullHeight,
}: ISliding) => {
  const user = useSelector(getUser);

  return (
    <SlidingPanel
      darkened
      isOpen={isOpen}
      onClose={onClose}
      initialHeight={initialHeight}
      fullHeight={fullHeight}
    >
      <div className={style.sliding__block}>
        <div className={style.sliding__money}>
          <img width={277} height={90} src={slide} alt="" />
          <span className={style.sliding__coins}>{user?.points_all}</span>
        </div>
        <h2 className={style.sliding__title}>У тебя есть баллы!</h2>
        <p className={style.sliding__label}>
          Обменяй их на бонусы в нашем магазине
        </p>
        <p className={style.sliding__span}>
          *Важно: когда ты тратишь баллы в магазине, твой рейтинг в лидерборде
          не меняется!
        </p>
        <button onClick={onClose} className={style.sliding__button}>
          Понятно
        </button>
      </div>
    </SlidingPanel>
  );
};
