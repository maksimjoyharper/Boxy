import { useSuspenseQuery } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { fetchLeaderboard } from "../../api/fetchLeaderboard/fetchLeaderboard";

export const useLeaderboard = (tg_id: string) => {
  return useSuspenseQuery(
    {
      queryFn: () => fetchLeaderboard(tg_id),
      queryKey: ["leaderboard"],
    },
    queryClient
  );
};
