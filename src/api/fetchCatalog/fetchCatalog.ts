import axios from "axios";
import { api_url } from "../api_url";
import { fetchCatalogProps } from "../../types/catalogTypes";

export function fetchCatalog(tg_id: string): Promise<fetchCatalogProps> {
  return axios
    .get(`${api_url}/api/shop/product-list/${tg_id}/`, {
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

export function fetchBuyProduct(tg_id: string, product_id: string) {
  return axios
    .post(`${api_url}/api/shop/product-list/${tg_id}/`, {
      product_id: product_id,
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
