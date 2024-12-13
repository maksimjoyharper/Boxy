import { useQuery } from "@tanstack/react-query";
import { useTelegram } from "../../hooks/telegram/telegram";
import style from "./Tasks.module.css";
import {
  fetchAllTasks,
  fetchTasksProps,
} from "../../api/fetchTasks/fetchTasks";
import { queryClient } from "../../api/queryClient";
import { useEffect, useState } from "react";
import CardTask from "../../components/cards/cardTask/CardTask";
import iconCoin from "../../assets/webp/coin.webp";
import icon from "../../assets/png/catalog__first.png";

export default function Tasks() {
  const { tg_id } = useTelegram();
  const [allTasks, setAllTasks] = useState<fetchTasksProps[]>([]);

  const { data } = useQuery(
    {
      queryFn: () => fetchAllTasks(tg_id),
      queryKey: ["tasks"],
    },
    queryClient
  );

  useEffect(() => {
    if (data) {
      setAllTasks(data);
    }
  }, [data]);

  return (
    <section className={style.container}>
      <h1 className={style.task_title}>Задания</h1>
      <ul className={style.tasks_list}>
        <li className={style.task__item}>
          <p className={style.task_name}>
            Пригласи друга по реферальной ссылке
          </p>
          {/* <button
  className={task.completed ? style.task_btn : style.task_compl_btn}
>
  {task.completed ? "Забрать награду" : "Награда получена"}
</button> */}
          <div className={style.coins_box}>
            <img
              width={43}
              height={43}
              className={style.coin_img}
              src={iconCoin}
              alt=""
            />
            <span className={style.coins}>500</span>
          </div>
          <img className={style.icon} src={icon} />
        </li>
        {allTasks.map((task) => (
          <CardTask task={task} key={task.task.id} />
        ))}
      </ul>
    </section>
  );
}
