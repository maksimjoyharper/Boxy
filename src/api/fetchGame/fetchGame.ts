import axios from "axios";
import { api_url } from "../api_url";
import { fetchGameOverProps, fetchGameProps } from "../../types/gameTypes";

export function fetchOverGame({ tg_id, points }: fetchGameOverProps) {
  return axios
    .post(`${api_url}/api/game-result/`, {
      points: points,
      tg_id: tg_id,
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function fetchGame({ tg_id, premium_tickets, tickets }: fetchGameProps) {
  return axios
    .post(`${api_url}/api/game-start/`, {
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
