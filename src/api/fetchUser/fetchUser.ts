import axios from "axios";
import { api_url } from "../api_url";
import { fetchUserProps } from "../../types/userType";

export function fetchUser(
  tg_id: string,
  username: string
): Promise<fetchUserProps> {
  return axios
    .get(`${api_url}/api/player-info/${tg_id}/${username}/`)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
