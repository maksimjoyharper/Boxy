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
  };
  start_time: string;
  completed: boolean;
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