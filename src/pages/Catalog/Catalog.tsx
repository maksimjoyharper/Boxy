import style from "./Catalog.module.scss";

const Catalog = () => {
  return (
    <section>
      <h1 className={style.catalog__title}>Каталог</h1>
      <ul>
        <li className={style.catalog__item}>
          <div className={style.catalog__upper}>
            <p className={style.catalog__price}>Бесплатно</p>
            <h2 className={style.catalog__info}>Пройдите профтест на ....</h2>
          </div>
          <div className={style.catalog__down}>
            <img className={style.catalog__img} src="" alt="предмет каталога" />
            <span className={style.catalog__profession}>Профтест</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Catalog;
