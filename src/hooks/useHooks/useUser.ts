import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../api/fetchUser/fetchUser";
import { queryClient } from "../../api/queryClient";
import { fetchUserProps } from "../../types/userType";
import {
  getBlogerFriend,
  getFriend,
} from "../../api/fetchFriends/fetchFriends";

export const useFetchUser = (
  tg_id: string,
  userName: string,
  paramIdFriend: string | null
) => {
  return useQuery<fetchUserProps>(
    {
      queryKey: ["user"],
      queryFn: () => fetchUser(tg_id, userName),
      enabled: !paramIdFriend && !!tg_id,
    },
    queryClient
  );
};

export const useReferralUser = (
  tg_id: string,
  userName: string,
  referral_id: string
) => {
  return useQuery(
    {
      queryKey: ["addFriend"],
      queryFn: () => getFriend(tg_id, userName, referral_id),
      enabled: !!referral_id && !!tg_id,
    },
    queryClient
  );
};

export const useFirstBlogerUser = (
  tg_id: string,
  userName: string,
  bloger_id: string
) => {
  return useQuery(
    {
      queryKey: ["addFriendUtm"],
      queryFn: () => getBlogerFriend(tg_id, userName, bloger_id),
      enabled: !!bloger_id && !!tg_id,
    },
    queryClient
  );
};
