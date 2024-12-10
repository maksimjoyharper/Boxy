import axios from "axios";
import { api_url } from "../api_url";

export interface fetchGameProps {
  tg_id: string;
  points: number;
  premium_tickets?: number;
  tickets?: number;
}

export function fetchGame({
  tg_id,
  points,
  tickets,
  premium_tickets,
}: fetchGameProps) {
  return axios
    .post(`${api_url}/api/game-result/`, {
      points: points,
      tg_id: tg_id,
      tickets: tickets,
      premium_tickets: premium_tickets,
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
