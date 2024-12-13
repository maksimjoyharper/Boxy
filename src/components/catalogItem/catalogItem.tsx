import style from "./catalogItem.module.scss";

interface ICatalog {
  id: string;
  name: string;
  price: string | boolean | number;
  description: string;
  is_accessible?: boolean;
  is_purchased?: boolean;
}

export const CatalogItem = ({ id, name, price, description }: ICatalog) => {
  return (
    <li key={id} className={style.catalog__item}>
      <div className={style.catalog__upper}>
        <p className={style.catalog__price}>{price}</p>
        <h2 className={style.catalog__info}>{name}</h2>
      </div>
      <div className={style.catalog__down}>
        <img className={style.catalog__img} src="" alt="предмет каталога" />
        <span className={style.catalog__profession}>{description}</span>
      </div>
    </li>
  );
};
