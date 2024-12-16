import axios from "axios";
import { api_url } from "../api_url";

export function fetchOnboarding(tg_id: string) {
  return axios
    .post(`${api_url}/api/instruction/`, {
      tg_id,
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
