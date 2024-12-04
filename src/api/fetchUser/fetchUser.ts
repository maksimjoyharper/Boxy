import axios from "axios";
import { api_url } from "../api_url";

interface fetchUserProps {
  name: string;
}

export function fetchUser(tg_id: string) {
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
