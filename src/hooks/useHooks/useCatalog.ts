import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";

import {
  fetchBuyProduct,
  fetchCatalog,
} from "../../api/fetchCatalog/fetchCatalog";

export const useFetchCatalog = (tg_id: string) => {
  return useSuspenseQuery(
    {
      queryFn: () => fetchCatalog(tg_id),
      queryKey: ["catalog"],
    },
    queryClient
  );
};

export const useBuyProduct = (
  openLink: (link: string) => void,
  link: string,
  onClose: () => void,
  tg: any
) => {
  return useMutation(
    {
      mutationFn: (data: { tg_id: string; product_id: string }) =>
        fetchBuyProduct(data.tg_id, data.product_id),
      onSuccess: (data) => {
        if (data.message === "Продукт успешно куплен") {
          // window.location.href = product.link;
          openLink(link);
          onClose();
          queryClient.invalidateQueries({ queryKey: ["catalog"] });
        }
      },
      onError: () => {
        onClose();
        tg.HapticFeedback.impactOccurred("medium");
      },
    },
    queryClient
  );
};
