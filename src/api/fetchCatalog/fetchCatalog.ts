import axios from "axios";
import { api_url } from "../api_url";

interface fetchCatalogProps {
  shops: {
    id: string;
    name: string;
    description: string;
    price: string;
    products: {
      id: string;
      name: string;
      is_purchased: string;
      is_accessible: string;
      price: number;
    }[];
  }[];
}

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
