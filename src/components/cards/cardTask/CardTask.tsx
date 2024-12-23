import { memo, useEffect, useState } from "react";
import iconCoin from "../../../assets/webp/coin.webp";
import style from "./CardTask.module.scss";
import { getImgTask } from "../../../features/getImgTask";
import SlidingTasks from "../../slidingTasks/slidingTasks";
import iconLock from "../../../assets/png/task/lock.png";
import { useMediaQuery } from "react-responsive";
import { useTelegram } from "../../../hooks/telegram/telegram";
import { useNavigate } from "react-router-dom";
import { CardTaskProps } from "../../../types/tasksTypes";

const CardTask = memo(({ task, allTasks }: CardTaskProps) => {
  const { tg } = useTelegram();
  const [icon, setIcon] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);
  const mediaQuery = useMediaQuery({
    query: "(max-height: 690px)",
  });

  const navigate = useNavigate();

  const handleOpen = () => {
    const firstTask = allTasks[0].completed;

    if (!firstTask && task.task.dop_name === "anketa") {
      setIsOpen(true);
      tg.HapticFeedback.impactOccurred("medium");
    } else {
      setIsOpen(false);
    }

    if (task.task.id !== 1 && firstTask && !task.completed) {
      setIsOpen(true);
      tg.HapticFeedback.impactOccurred("medium");
    }
    if (task.task.id === 2) {
      setIsOpen(false);
      navigate("/friends");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    tg.HapticFeedback.impactOccurred("medium");
  };

  useEffect(() => {
    getImgTask(task.task.dop_name, setIcon);
  }, [task]);

  return (
    <>
      <li onClick={handleOpen} className={style.task_item}>
        {task.task.id > 2 && !allTasks[0].completed && (
          <img src={iconLock} className={style.iconLock} />
        )}
        <p className={style.task_name}>{task.task.name}</p>

        {task.completed ? (
          <button disabled className={style.task_compl_btn}>
            {task.completed && "Награда получена"}
          </button>
        ) : task.task.id > 2 && !allTasks[0].completed ? (
          <button disabled className={style.task_compl_btn}>
            Заполните профиль{" "}
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
        initialHeight={mediaQuery ? "100%" : "90%"}
        fullHeight={"100vh"}
        task={task}
      />
    </>
  );
});

export default CardTask;
