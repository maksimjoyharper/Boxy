import style from "./onboarding.module.scss";

interface IOnboarding {
  id: number;
  img: string;
  title: string;
  label: string;
  buttonEnd: () => void;
}

export const OnboardingSeventh = ({
  id,
  img,
  title,
  label,
  buttonEnd,
}: IOnboarding) => {
  return (
    <li className={style.onboarding__item} key={id}>
      <img
        className={style.onboarding__image}
        width={375}
        height={517}
        src={img}
        alt=""
      />
      <div className={style.onboarding__info}>
        <h2 className={style.onboarding__title}>{title}</h2>
        <p className={style.onboarding__label}>{label}</p>
        <button onClick={buttonEnd} className={style.onboarding__button}>
          Играть!
        </button>
      </div>
    </li>
  );
};
