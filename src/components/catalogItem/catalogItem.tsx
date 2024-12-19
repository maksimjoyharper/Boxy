import { memo, useEffect, useState } from "react";
import style from "./catalogItem.module.scss";
import { getImgCatalog } from "../../features/getImgCatalog";
import coin from "../../assets/webp/coin.webp";
import { formatNumber } from "../../features/formatNumber";
import { useMutation } from "@tanstack/react-query";
import { fetchBuyProduct } from "../../api/fetchCatalog/fetchCatalog";
import { queryClient } from "../../api/queryClient";
import { useTelegram } from "../../hooks/telegram/telegram";

interface ICatalog {
  id: string;
  name: string;
  price: number;
  description: string;
  prof: string;
  is_accessible?: boolean;
  is_purchased?: boolean;
  link: string;
  currentCoin: number | undefined;
}

export const CatalogItem = memo(
  ({
    id,
    name,
    price,
    description,
    prof,
    link,
    currentCoin,
    is_accessible,
  }: ICatalog) => {
    const { tg_id } = useTelegram();
    const [icon, setIcon] = useState<string>();
    useEffect(() => {
      getImgCatalog(name, setIcon);
    }, [name]);

    const buyProduct = useMutation(
      {
        mutationFn: (data: { tg_id: string; product_id: string }) =>
          fetchBuyProduct(data.tg_id, data.product_id),
        onSuccess: (data) => {
          if (data.message === "Продукт успешно куплен") {
            window.location.href = link;
          }
        },
      },
      queryClient
    );

    const handleOpenLink = () => {
      if (!is_accessible) {
        if (currentCoin) {
          if (currentCoin >= +price) {
            buyProduct.mutate({ tg_id: tg_id, product_id: id });
          }
        }
      }
    };

    return (
      <li onClick={handleOpenLink} key={id} className={style.catalog__item}>
        <div className={style.catalog__upper}>
          <p
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
            className={style.catalog__price}
          >
            {price === 0 && "Бесплатно"}
            {price !== 0 && (
              <img width={43} height={43} src={coin} alt="coin" />
            )}

            {price !== 0 && formatNumber(price)}
          </p>
          {price !== 0 && <p className={style.catalog__prof}>{prof}</p>}
          <h2 className={style.catalog__info}>{name}</h2>
        </div>
        <span className={style.catalog__profession}>{description}</span>
        <img className={style.catalog__img} src={icon} alt="предмет каталога" />
      </li>
    );
  }
);
