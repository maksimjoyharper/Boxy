import style from "./PageUI.module.scss";
import avatar from "../../assets/png/avatar.png";

interface IPage {
  title: string;
  time?: string;
  children?: React.ReactNode;
  place?: string;
  className__title?: string;
  className?: string;
}

export const PageUI: React.FC<IPage> = ({
  className__title,
  place,
  children,
  title,
  time,
  className,
}) => {
  return (
    <section className={className}>
      <h1 className={`${style.page__title} ${className__title}`}>{title}</h1>
      {time && <p className={style.page__label}>{time}</p>}
      {place && (
        <div className={style.page__person}>
          <img className={style.page__avatar} src={avatar} alt="аватарка" />
          <div className={style.page__info}>
            <h2 className={style.page__name}>Name</h2>
            <p className={style.page__coins}>Coins</p>
          </div>
          <p className={style.page__place}>{place}</p>
        </div>
      )}
      {children}
    </section>
  );
};
