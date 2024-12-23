import axios from "axios";
import { api_url } from "../api_url";
import { fetchFriendsProps } from "../../types/friendsTypes";

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

export const getFriend = (
  tg_id: string,
  userName: string,
  new_player_id: string | undefined
) => {
  return axios
    .get(`${api_url}/api/player-info/${tg_id}/${userName}/${new_player_id}/ `)
    .then((response) => response.data)
    .catch((error) => error);
};

export const getRefLink = (tg_id: string) => {
  return axios
    .get(`${api_url}/api/generate_link/${tg_id}/`)
    .then((response) => response.data)
    .catch((error) => error);
};

export const getBlogerFriend = (
  tg_id: string,
  userName: string,
  utm_nickname: string | undefined
) => {
  return axios
    .get(
      `${api_url}/api/player-info/utm/${tg_id}/${userName}/${utm_nickname}/ `
    )
    .then((response) => response.data)
    .catch((error) => error);
};

export const getBonusOfRef = (tg_id: string, new_player_id: string) => {
  return axios
    .post(`${api_url}/api/referral_bonus/${tg_id}/${new_player_id}/`)
    .then((response) => response.data)
    .catch((error) => error);
};
