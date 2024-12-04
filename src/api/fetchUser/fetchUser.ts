import axios from "axios";
import { api_url } from "../api_url";

interface fetchUserProps {
  id: number;
  name: string;
  points: number;
  tickets: number;
  premium_tickets: number;
}

export function fetchUser(tg_id: string): Promise<fetchUserProps> {
  return axios
    .get(`${api_url}/player-info/${tg_id}/`)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
