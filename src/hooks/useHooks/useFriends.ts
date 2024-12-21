import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import {
  fetchAllFriends,
  getRefLink,
} from "../../api/fetchFriends/fetchFriends";

export const useFetchFriends = (tg_id: string) => {
  return useSuspenseQuery(
    {
      queryKey: ["friends"],
      queryFn: () => fetchAllFriends(tg_id),
    },
    queryClient
  );
};

export const useGetRefLink = (tg_id: string) => {
  return useQuery(
    {
      queryKey: ["refLink"],
      queryFn: () => getRefLink(tg_id),
    },
    queryClient
  );
};
