import { useEffect, useState } from "react";
import { fetchTasksProps } from "../../../api/fetchTasks/fetchTasks";
import iconCoin from "../../../assets/webp/coin.webp";
import style from "./CardTask.module.scss";
import { getImgTask } from "../../../features/getImgTask";
import SlidingTasks from "../../slidingTasks/slidingTasks";
import iconLock from "../../../assets/png/task/lock.png";

type CardTaskProps = {
  task: fetchTasksProps;
  allTasks: fetchTasksProps[];
};

export default function CardTask({ task, allTasks }: CardTaskProps) {
  const [icon, setIcon] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    const firstTask = allTasks[0].completed;

    if (!firstTask && task.task.id === 1) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }

    if (task.task.id !== 1 && firstTask) {
      setIsOpen(true);
    }
    if (task.task.id === 2) {
      setIsOpen(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    getImgTask(task.task.name, setIcon);
  }, [task]);

  return (
    <>
      <li onClick={handleOpen} className={style.task_item}>
        {task.task.id >= 2 && !allTasks[0].completed && (
          <img src={iconLock} className={style.iconLock} />
        )}
        <p className={style.task_name}>{task.task.name}</p>
        {task.completed ? (
          <button disabled className={style.task_compl_btn}>
            {task.completed && "Награда получена"}
          </button>
        ) : (
          <div className={style.coins_box}>
            <img className={style.coin_img} src={iconCoin} alt="" />
            <span className={style.coins}>{task.task.reward_currency}</span>
          </div>
        )}

        <img className={style.icon} src={icon} />
      </li>
      <SlidingTasks
        isOpen={isOpen}
        onClose={handleClose}
        initialHeight={"70%"}
        fullHeight={"100vh"}
        task={task}
      />
    </>
  );
}
