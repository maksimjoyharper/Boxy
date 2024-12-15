import { useQuery } from "@tanstack/react-query";
import { useTelegram } from "../../hooks/telegram/telegram";
import style from "./Tasks.module.scss";
import {
  fetchAllTasks,
  fetchTasksProps,
  // fetchTgTask,
} from "../../api/fetchTasks/fetchTasks";
import { queryClient } from "../../api/queryClient";
import { useEffect, useState } from "react";
import CardTask from "../../components/cards/cardTask/CardTask";

export default function Tasks() {
  const { tg_id } = useTelegram();
  const [allTasks, setAllTasks] = useState<fetchTasksProps[]>([]);
  // const [isDisabled, setIsDisabled] = useState<boolean>(false);

  // const { data: tgTask } = useQuery(
  //   {
  //     queryFn: () => fetchTgTask(tg_id),
  //     queryKey: ["taskTg"],
  //   },
  //   queryClient
  // );

  const { data } = useQuery(
    {
      queryFn: () => fetchAllTasks(tg_id),
      queryKey: ["tasks"],
    },
    queryClient
  );

  // useEffect(() => {
  //   // if (tgTask) {
  //   //   console.log(tgTask);
  //   // }
  // }, [tgTask]);

  useEffect(() => {
    if (data) {
      setAllTasks(data);
      // if (data[0].completed) {
      //   setIsDisabled(true);
      // }
    }
  }, [data]);

  return (
    <>
      <section className={style.task__section}>
        <h1 className={style.task_title}>Задания</h1>
        <ul className={style.tasks_list}>
          {allTasks.map((task) => (
            <CardTask task={task} key={task.task.id} />
          ))}
        </ul>
      </section>
    </>
  );
}
