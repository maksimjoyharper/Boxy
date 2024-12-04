import axios from "axios";
import { api_url } from "../api_url";

export interface fetchLeaderProps {
  tg_id: number;
  name: string;
  points: number;
  rank: number;
}

export function fetchLeaderboard(tg_id: string): Promise<fetchLeaderProps[]> {
  return axios
    .get(`${api_url}/top100/${tg_id}/`)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
