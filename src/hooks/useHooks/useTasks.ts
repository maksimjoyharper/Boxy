import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import {
  checkTask,
  fetchAllTasks,
  startTask,
  taskCheckTg,
  taskInfo,
} from "../../api/fetchTasks/fetchTasks";
import { fetchTasksProps } from "../../types/tasksTypes";

export const useFetchTasks = (tg_id: string) => {
  return useSuspenseQuery(
    {
      queryFn: () => fetchAllTasks(tg_id),
      queryKey: ["tasks"],
    },
    queryClient
  );
};

export const useSubscribeOnLink = (
  openLink: (link: string) => void,
  task: fetchTasksProps
) => {
  return useMutation(
    {
      mutationFn: (data: { tg_id: string; don_name: string }) =>
        startTask(data.tg_id, data.don_name),
      onSuccess: (data) => {
        if (data.start_time) {
          // window.location.href = task.task.link;
          openLink(task.task.link);
        }
      },
    },
    queryClient
  );
};

export const useCheckSubscribe = (onClose: () => void, tg: any) => {
  return useMutation(
    {
      mutationFn: (data: { tg_id: string; dop_name: string }) =>
        checkTask(data.tg_id, data.dop_name),
      onSuccess: () => {
        onClose();
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
        tg.HapticFeedback.impactOccurred("medium");
      },
    },
    queryClient
  );
};

export const useInfoDataUser = (
  setName: (value: React.SetStateAction<string>) => void,
  setRegion: (value: React.SetStateAction<string>) => void,
  setPhone: (value: React.SetStateAction<string>) => void,
  onClose: () => void,
  tg: any
) => {
  return useMutation(
    {
      mutationFn: (data: {
        tg_id: string;
        country: string;
        name_player: string;
        phone: string;
      }) => taskInfo(data.tg_id, data.country, data.name_player, data.phone),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
        setName("");
        setRegion("by");
        setPhone("");
        onClose();
        tg.HapticFeedback.impactOccurred("medium");
      },
    },
    queryClient
  );
};

export const useCheckSubscribeTg = (onClose: () => void) => {
  return useMutation(
    {
      mutationFn: (data: { tg_id: string; dop_name: string }) =>
        taskCheckTg(data.tg_id, data.dop_name),
      onSuccess: (data) => {
        if (data.message == "Пользователь не подписан на канал.") {
          onClose();
        } else {
          queryClient.invalidateQueries({ queryKey: ["tasks"] });
          onClose();
        }
      },
    },
    queryClient
  );
};
