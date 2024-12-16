import style from "./onboarding.module.scss";

interface IOnboarding {
  id: number;
  img: string;
  title: string;
  label: string;
  buttonStart: () => void;
}

export const OnboardingFirst = ({
  id,
  img,
  title,
  label,
  buttonStart,
}: IOnboarding) => {
  return (
    <li className={style.onboarding__item} key={id}>
      <img
        className={style.onboarding__image}
        width={375}
        height={400}
        src={img}
        alt=""
      />
      <div className={style.onboarding__info}>
        <h2 className={style.onboarding__title}>{title}</h2>
        <p className={style.onboarding__label}>{label}</p>
        <button onClick={buttonStart} className={style.onboarding__button}>
          Начать
        </button>
      </div>
    </li>
  );
};
