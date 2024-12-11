import axios from "axios";
import { api_url } from "../api_url";

export interface fetchFriendsProps {
  tg_id: string;
  name: string;
  referral_bonus: string;
  points: string;
}

export function fetchAllFriends(tg_id: string): Promise<fetchFriendsProps[]> {
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

export const getFriend = (tg_id: string, new_player_id: string) => {
  return axios
    .get(`${api_url}/api/referral_bonus/${tg_id}/${new_player_id}/ `)
    .then((response) => response.data)
    .catch((error) => error);
};

export const getRefLink = (tg_id: string) => {
  return axios
    .get(`${api_url}/api/generate_link/${tg_id}/`)
    .then((response) => response.data)
    .catch((error) => error);
};
