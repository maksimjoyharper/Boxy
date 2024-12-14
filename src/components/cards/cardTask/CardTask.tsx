import { useEffect, useState } from "react";
import { fetchTasksProps } from "../../../api/fetchTasks/fetchTasks";
import iconCoin from "../../../assets/webp/coin.webp";
import style from "./CardTask.module.css";
import { getImgTask } from "../../../features/getImgTask";
import SlidingTasks from "../../slidingTasks/slidingTasks";

type CardTaskProps = {
  task: fetchTasksProps;
};

export default function CardTask({ task }: CardTaskProps) {
  const [icon, setIcon] = useState<string>();

  useEffect(() => {
    getImgTask(task.task.name, setIcon);
  }, [task]);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {" "}
      <li onClick={() => setIsOpen(true)} className={style.task_item}>
        <p className={style.task_name}>{task.task.name}</p>
        <div className={style.coins_box}>
          <img className={style.coin_img} src={iconCoin} alt="" />
          <span className={style.coins}>{task.task.reward_currency}</span>
        </div>
        <img className={style.icon} src={icon} />
      </li>
      <SlidingTasks
        isOpen={isOpen}
        onClose={handleClose}
        initialHeight={"70%"}
        fullHeight={"70vh"}
        task={task}
      />
    </>
  );
}
