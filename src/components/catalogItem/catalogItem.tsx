import { useEffect, useState } from "react";
import style from "./catalogItem.module.scss";
import { getImgCatalog } from "../../features/getImgCatalog";
import coin from "../../assets/png/coin__catalog.png";

interface ICatalog {
  id: string;
  name: string;
  price: string | boolean | number;
  description: string;
  prof: string;
  is_accessible?: boolean;
  is_purchased?: boolean;
}

export const CatalogItem = ({
  id,
  name,
  price,
  description,
  prof,
}: ICatalog) => {
  const [icon, setIcon] = useState<string>();
  useEffect(() => {
    getImgCatalog(name, setIcon);
  }, [name]);

  return (
    <li key={id} className={style.catalog__item}>
      <div className={style.catalog__upper}>
        <p
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          className={style.catalog__price}
        >
          {price !== "Бесплатно" ? <img src={coin} alt="" /> : null}
          {price}
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
