import style from "./PageUI.module.scss";
// import avatar from "../../assets/png/avatar.png";
import { ReactNode } from "react";
import { LeaderboardGiftSvg } from "../../assets/svg/LeaderboardGiftSvg";
import classNames from "classnames";
import iconCoin from "../../assets/webp/coin.webp";
import { useTelegram } from "../../hooks/telegram/telegram";

interface IPage {
  title: string;
  time?: string;
  children?: React.ReactNode;
  place?: string;
  className__title?: string;
  className?: string;
  gift?: ReactNode;
  name?: string;
  coins?: number;
  isOpen?: () => void;
}

export const PageUI: React.FC<IPage> = ({
  className__title,
  place,
  children,
  title,
  time,
  className,
  gift,
  name,
  coins,
  isOpen,
}) => {
  const { avatar } = useTelegram();
  return (
    <section className={className}>
      <h1 className={`${style.page__title} ${className__title}`}>{title}</h1>
      {time && <p className={style.page__label}>{time}</p>}
      {place && (
        <button
          onClick={gift === 1 ? isOpen : undefined}
          className={style.page__person}
        >
          <div className={style.page__image}>
            <img className={style.page__avatar} src={avatar} alt="аватарка" />
            {gift && (
              <button className={style.page__gift}>
                <LeaderboardGiftSvg />
              </button>
            )}
          </div>
          <div className={style.page__info}>
            <h2
              className={classNames(
                style.page__name,
                (name?.length || 0) >= 10 && style.fz
              )}
            >
              {name}
            </h2>
            <p className={style.page__coins}>
              <img
                width={21}
                height={21}
                className={style.iconCoin}
                src={iconCoin}
                alt=""
              />
              <span>{coins}</span>
            </p>
          </div>
          <p className={style.page__place}>{place}</p>
        </button>
      )}
      {children}
    </section>
  );
};
