import axios from "axios";
import { api_url } from "../api_url";

export function fetchAllFriends(tg_id: string) {
  return axios
    .get(`${api_url}/all_friends/${tg_id}`)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
