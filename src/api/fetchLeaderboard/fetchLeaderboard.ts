import axios from "axios";
import { api_url } from "../api_url";

interface test {
  additionalProp: string;
}

export function fetchLeaderboard(tg_id: string): Promise<test> {
  return axios
    .get(`${api_url}/top100/${tg_id}`)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
