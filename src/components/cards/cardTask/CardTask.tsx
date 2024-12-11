import { fetchTasksProps } from "../../../api/fetchTasks/fetchTasks";
import style from "./CardTask.module.css";

type CardTaskProps = {
  task: fetchTasksProps;
};

export default function CardTask({ task }: CardTaskProps) {
  return (
    <li className={style.task_item}>
      <div className={style.task_upper}>
        <p className={style.task_price}>{task.task.name}</p>
        <h2 className={style.task_info}>{task.task.description}</h2>
      </div>
      <div className={style.task_down}>
        <img className={style.task_img} src="" alt="предмет каталога" />
        <span className={style.task_profession}>Профтест</span>
      </div>
    </li>
  );
}
