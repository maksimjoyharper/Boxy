import axios from "axios";
import { api_url } from "../api_url";

export const getUser = (tg_id: string, name: string) => {
  return axios
    .get(`${api_url}/api/player-info/${tg_id}/${name}/`)
    .then((response) => response.data);
};
