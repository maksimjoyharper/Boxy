import { useEffect, useState } from "react";
import { fetchTasksProps } from "../../../api/fetchTasks/fetchTasks";
import { HeaderCoinSvg } from "../../../assets/svg/HeaderCoinSvg";
import style from "./CardTask.module.css";
import { getImgTask } from "../../../features/getImgTask";

type CardTaskProps = {
  task: fetchTasksProps;
};

export default function CardTask({ task }: CardTaskProps) {
  const [icon, setIcon] = useState<string>();

  useEffect(() => {
    getImgTask(task.task.name, setIcon);
  }, [task]);

  return (
    <li className={style.task_item}>
      <p className={style.task_name}>{task.task.name}</p>
      <div className={style.coins_box}>
        <HeaderCoinSvg width="43" height="43" />
        <span className={style.coins}>{task.task.reward_currency}</span>
      </div>
      <img className={style.icon} src={icon} />
    </li>
  );
}
