import { useEffect, useState } from "react";
import style from "./catalogItem.module.scss";
import { getImgCatalog } from "../../features/getImgCatalog";
import coin from "../../assets/webp/coin.webp";
import { formatNumber } from "../../features/formatNumber";

interface ICatalog {
  id: string;
  name: string;
  price: string | boolean | number;
  description: string;
  prof: string;
  is_accessible?: boolean;
  is_purchased?: boolean;
  link: string;
}

export const CatalogItem = ({
  id,
  name,
  price,
  description,
  prof,
  link,
}: ICatalog) => {
  const [icon, setIcon] = useState<string>();
  useEffect(() => {
    getImgCatalog(name, setIcon);
  }, [name]);

  const handleOpenLink = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <li onClick={handleOpenLink} key={id} className={style.catalog__item}>
      <div className={style.catalog__upper}>
        <p
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          className={style.catalog__price}
        >
          {price !== "Бесплатно" ? (
            <img width={43} height={43} src={coin} alt="coin" />
          ) : null}
          {formatNumber(price)}
        </p>
        <h2 className={style.catalog__info}>{name}</h2>
        <p className={style.catalog__prof}>{prof}</p>
      </div>
      <div className={style.catalog__down}>
        <img className={style.catalog__img} src={icon} alt="предмет каталога" />
        <span className={style.catalog__profession}>{description}</span>
      </div>
    </li>
  );
};
