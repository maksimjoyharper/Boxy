import style from "./Catalog.module.scss";

const Catalog = () => {
  return (
    <section>
      <h1 className={style.catalog__title}>Каталог</h1>
      <ul>
        <li className={style.catalog__item}>
          <p>Бесплатно</p>
          <h2>Пройдите профтест на ....</h2>
          <div>
            <img src="" alt="предмет каталога" />
            <span>Профтест</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Catalog;
