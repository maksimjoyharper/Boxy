import axios from "axios";
import { api_url } from "../api_url";

export function fetchCatalog(tg_id: string){
    return axios.get(`${api_url}/shop/product-list/${tg_id}/`).then((response) => {
        const data = response.data
        return data
    }).catch((error) => {
        console.log(error)
    })
}