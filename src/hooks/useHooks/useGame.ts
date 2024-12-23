import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { fetchGameProps } from "../../types/gameTypes";
import { fetchGame } from "../../api/fetchGame/fetchGame";

export const useGame = () => {
  return useMutation(
    {
      mutationFn: (data: fetchGameProps) => fetchGame(data),
    },
    queryClient
  );
};
