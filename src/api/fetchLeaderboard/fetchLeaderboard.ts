import axios from "axios";
import { api_url } from "../api_url";
import { fetchLeaderboardProps } from "../../types/liderBoardTypes";

export function fetchLeaderboard(
  tg_id: string
): Promise<fetchLeaderboardProps> {
  return axios
    .get(`${api_url}/api/top100/${tg_id}/`)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
