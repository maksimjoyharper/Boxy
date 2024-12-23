import { memo, useEffect, useMemo, useState } from "react";
import style from "./catalogItem.module.scss";
import { getImgCatalog } from "../../features/getImgCatalog";
import coin from "../../assets/webp/coin.webp";
import { formatNumber } from "../../features/formatNumber";
import { useTelegram } from "../../hooks/telegram/telegram";
import SlidingProduct from "../slidingProduct/slidingProduct";

export interface ICatalog {
  id: string;
  name: string;
  price: number;
  description: string;
  prof: string;
  is_accessible: boolean | string;
  is_purchased: boolean | string;
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
    is_purchased,
  }: ICatalog) => {
    const { tg } = useTelegram();
    const [icon, setIcon] = useState<string>();
    const product: ICatalog = {
      id,
      name,
      price,
      description,
      prof,
      is_accessible,
      link,
      currentCoin,
      is_purchased,
    };

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      getImgCatalog(name, setIcon);
    }, [name]);

    const handleOpenLink = () => {
      if (!is_accessible) {
        setIsOpen(true);
        tg.HapticFeedback.impactOccurred("medium");
      } else return;
    };

    const handleClose = () => {
      setIsOpen(false);
      tg.HapticFeedback.impactOccurred("medium");
    };

    const formattedNumber = useMemo(() => {
      return formatNumber(price);
    }, [price]);

    return (
      <>
        <li onClick={handleOpenLink} key={id} className={style.catalog__item}>
          <div className={style.catalog__upper}>
            {is_accessible === true ? (
              <>
                {id == "4" || id == "5" ? (
                  <p className={style.catalog__price}>
                    {product.id == "4" && "BOXY5"}
                    {product.id == "5" && "BOXY10"}
                  </p>
                ) : (
                  <button disabled className={style.catalog_compl_btn}>
                    Приобретено
                  </button>
                )}
              </>
            ) : (
              <p
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
                className={style.catalog__price}
              >
                {price === 0 && "Бесплатно"}
                {price !== 0 && (
                  <img width={43} height={43} src={coin} alt="coin" />
                )}

                {price !== 0 && formattedNumber}
              </p>
            )}
            {price !== 0 && <p className={style.catalog__prof}>{prof}</p>}
            <h2 className={style.catalog__info}>{name}</h2>
          </div>

          <span className={style.catalog__profession}>{description}</span>

          <img
            className={style.catalog__img}
            src={icon}
            alt="предмет каталога"
          />
        </li>
        <SlidingProduct
          onClose={handleClose}
          isOpen={isOpen}
          initialHeight="70%"
          fullHeight="70vh"
          product={product}
        />
      </>
    );
  }
);
