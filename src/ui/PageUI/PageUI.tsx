import { FC } from "react";
import style from "./PageUI.module.scss";

interface IPage {
  title: string;
  time?: string;
}

export const PageUI: FC<IPage> = ({ title, time }) => {
  return (
    <section className={style.page__section}>
      <h1 className={style.page__title}>{title}</h1>
      {time && <p className={style.page__label}>{time}</p>}

      <div className={style.page__person}>
        <img className={style.page__avatar} src="" alt="аватарка" />
        <div className={style.page__info}>
          <h2 className={style.page__name}>Name</h2>
          <p className={style.page__coins}>Coins</p>
        </div>
        <p className={style.page__place}>09</p>
      </div>
      <ul className={style.page__list}>
        <li></li>
      </ul>
    </section>
  );
};
