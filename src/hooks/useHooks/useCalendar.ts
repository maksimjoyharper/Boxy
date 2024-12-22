import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { fetchCalendar } from "../../api/fetchCalendar/fetchCalendar";

export const useCalendar = () => {
  return useMutation(
    {
      mutationFn: (data: { tg_id: string }) => fetchCalendar(data.tg_id),
      mutationKey: ["calendar"],
    },
    queryClient
  );
};
