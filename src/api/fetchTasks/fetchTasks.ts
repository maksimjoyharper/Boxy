import axios from "axios";
import { api_url } from "../api_url";
import { fetchTasksProps } from "../../types/tasksTypes";

export function fetchAllTasks(tg_id: string): Promise<fetchTasksProps[]> {
  return axios
    .get(`${api_url}/api/tasks/${tg_id}/`)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export const taskCheckTg = (tg_id: string, task_dop_name: string) => {
  return axios
    .post(`${api_url}/api/tasks_tg/`, {
      tg_id: tg_id,
      task_dop_name: task_dop_name,
    })
    .then((response) => response.data)
    .catch((error) => error);
};

export const startTask = (tg_id: string, dop_name: string) => {
  return axios
    .post(`${api_url}/api/tasks/start/${tg_id}/${dop_name}/`)
    .then((response) => response.data)
    .catch((error) => error);
};

export const checkTask = (tg_id: string, dop_name: string) => {
  return axios
    .post(`${api_url}/api/tasks/${tg_id}/${dop_name}/`)
    .then((response) => response.data)
    .catch((error) => error);
};

export const taskInfo = (
  tg_id: string,
  country: string,
  name_player: string,
  phone: string
) => {
  return axios
    .post(`${api_url}/api/task_info/`, {
      tg_id: tg_id,
      country: country,
      name_player: name_player,
      phone: phone,
    })
    .then((response) => response.data)
    .catch((error) => error);
};
