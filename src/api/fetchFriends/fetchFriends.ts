import axios from "axios";
import { api_url } from "../api_url";

interface fetchFriendsProps {
  tg_id: string;
  name: string;
  referral_bonus: string;
  points: string;
}

export function fetchAllFriends(tg_id: string): Promise<fetchFriendsProps> {
  return axios
    .get(`${api_url}/api/all_friends/${tg_id}/`, {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
