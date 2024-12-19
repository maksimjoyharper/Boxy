import { useSuspenseQuery } from "@tanstack/react-query";
import { useTelegram } from "../../hooks/telegram/telegram";
import style from "./Tasks.module.scss";
import {
  fetchAllTasks,
  fetchTasksProps,
} from "../../api/fetchTasks/fetchTasks";
import { queryClient } from "../../api/queryClient";
import { useEffect, useState } from "react";
import CardTask from "../../components/cards/cardTask/CardTask";

export default function Tasks() {
  const { tg_id } = useTelegram();
  const [allTasks, setAllTasks] = useState<fetchTasksProps[]>([]);
  const [anketa, setAnketa] = useState<fetchTasksProps[]>([]);
  const [zadaniya, setZadaniya] = useState<fetchTasksProps[]>([]);
  const [podpiska, setPodpiska] = useState<fetchTasksProps[]>([]);

  const { data } = useSuspenseQuery(
    {
      queryFn: () => fetchAllTasks(tg_id),
      queryKey: ["tasks"],
    },
    queryClient
  );

  useEffect(() => {
    if (data) {
      setAllTasks(data);
      setAnketa(data.filter((t) => t.task.heading === "Задания"));
      setZadaniya(
        data.filter((t) => t.task.heading === "Подпишись на соцсети")
      );
      setPodpiska(data.filter((t) => t.task.heading === "Временные задания"));
    }
  }, [data]);

  return (
    <>
      <section className={style.task__section}>
        <h1 className={style.task_title}>Задания</h1>
        <ul className={style.tasks_list}>
          {anketa.map((task) => (
            <CardTask key={task.task.id} allTasks={allTasks} task={task} />
          ))}
          <h2 className={style.task_heading}>Подпишись на соцсети</h2>
          {zadaniya.map((task) => (
            <CardTask key={task.task.id} allTasks={allTasks} task={task} />
          ))}
          <h2 className={style.task_heading}>Временные задания</h2>
          {podpiska.map((task) => (
            <CardTask key={task.task.id} allTasks={allTasks} task={task} />
          ))}
        </ul>
      </section>
    </>
  );
}
