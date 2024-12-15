import { fetchTasksProps, startTask } from "../../api/fetchTasks/fetchTasks";
import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import style from "./slidingTasks.module.scss";
import imgCoin from "../../assets/webp/coin.webp";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { useTelegram } from "../../hooks/telegram/telegram";

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
  const { tg_id } = useTelegram();
  const subscribeOnLink = useMutation(
    {
      mutationFn: (data: { tg_id: string; don_name: string }) =>
        startTask(data.tg_id, data.don_name),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
        onClose();
      },
    },
    queryClient
  );

  const handleSubscribe = () => {
    if (task.task.link) {
      console.log(task.task.dop_name);

      subscribeOnLink.mutate({ tg_id: tg_id, don_name: task.task.dop_name });
      // window.location.href = task.task.link;
    }
  };

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
        <button onClick={handleSubscribe} className={style.btn}>
          Подписаться
        </button>
        <p className={style.text_info}>
          Оставшееся время для модерации, чтобы получить награду: 1 час
        </p>
        <button className={style.btn_check}>Проверить</button>
      </div>
    </SlidingPanel>
  );
}
