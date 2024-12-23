import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { fetchOnboarding } from "../../api/fetchOnboarding/fetchOnboarding";

export const useOnboarding = () => {
  return useMutation(
    {
      mutationFn: (data: { tg_id: string }) => fetchOnboarding(data.tg_id),
      mutationKey: ["onboarding"],
    },
    queryClient
  );
};
