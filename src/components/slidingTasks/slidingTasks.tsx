import { fetchTasksProps } from "../../api/fetchTasks/fetchTasks";
import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import style from "./slidingTasks.module.scss";
import imgCoin from "../../assets/webp/coin.webp";

interface ISliding {
  isOpen: boolean;
  onClose: () => void;
  initialHeight: string;
  fullHeight: string;
  task: fetchTasksProps;
}

export default function SlidingTasks({
  fullHeight,
  initialHeight,
  isOpen,
  onClose,
  task,
}: ISliding) {
  return (
    <SlidingPanel
      initialHeight={initialHeight}
      fullHeight={fullHeight}
      darkened
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={style.sliding__block}>
        <p className={style.name_title}>{task.task.name}</p>
        <div className={style.coin_box}>
          <img className={style.img_coin} src={imgCoin} alt="" />
          <span className={style.coins}>{task.task.reward_currency}</span>
        </div>
        <button className={style.btn}>Подписаться</button>
        <p className={style.text_info}>
          Оставшееся время для модерации, чтобы получить награду: 1 час
        </p>
        <button className={style.btn_check}>Проверить</button>
      </div>
    </SlidingPanel>
  );
}
