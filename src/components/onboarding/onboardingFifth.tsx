import { OnboardingNextSvg } from "../../assets/svg/OnboardingNextSvg";
import { OnboardingPrevSvg } from "../../assets/svg/OnboardingPrevSvg";
import style from "./onboarding.module.scss";
import onboarding from "../../assets/webp/onboarding/onboarding__five.webp";

interface IOnboarding {
  id: number;
  img: string;
  title: string;
  label: string;
  buttonPrev: () => void;
  buttonNext: () => void;
}

export const OnboardingFifth = ({
  id,
  img,
  title,
  label,
  buttonPrev,
  buttonNext,
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
        <div className={style.onboarding__progress}>
          <button onClick={buttonPrev} className={style.onboarding__skip}>
            <OnboardingPrevSvg />
          </button>
          <img width={92} height={8} src={onboarding} alt="" />
          <button onClick={buttonNext} className={style.onboarding__skip}>
            <OnboardingNextSvg />
          </button>
        </div>
      </div>
    </li>
  );
};
