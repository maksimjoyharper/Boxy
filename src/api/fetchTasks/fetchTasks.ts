import axios from "axios";
import { api_url } from "../api_url";

export interface fetchTasksProps {
  task: {
    id: string;
    name: string;
    dop_name: string;
    description: string;
    link: string;
    reward_currency: string;
    reward_tickets: string;
    is_active: boolean;
    heading: string;
  };
  start_time: string;
  completed: boolean;
  add_flag: boolean;
}

export interface fetchFirstTask {
  tg_id: string;
  country: string;
  name_player: string;
  phone: string;
}

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

export function fetchTgTask(tg_id: string) {
  return axios
    .get(`${api_url}/api/tasks_tg/${tg_id}/`)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

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
