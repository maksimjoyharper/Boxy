import { useState } from "react";
import { Modal } from "../../ui/Modal/Modal";
import { onboardingArr } from "./onboardingData";
import style from "./onboarding.module.scss";

interface IOnboarding {
  isOpen: boolean;
  onClose: () => void;
}

export const Onboarding = ({ isOpen, onClose }: IOnboarding) => {
  const [page, setPage] = useState(1);
  const oneStep = 1;

  return (
    <Modal onClose={onClose} lazy isOpen={isOpen}>
      <ul className={style.onboarding__list}>
        {onboardingArr
          .slice((page - 1) * oneStep, page * oneStep)
          .map((item) => (
            <li className={style.onboarding__item} key={item.id}>
              <img
                className={style.onboarding__image}
                width={375}
                height={400}
                src={item.image}
                alt=""
              />
              <div className={style.onboarding__info}>
                <h2 className={style.onboarding__title}>{item.title}</h2>
                <p className={style.onboarding__label}>{item.label}</p>
              </div>
            </li>
          ))}
        <button onClick={onClose}>Тест</button>
      </ul>
    </Modal>
  );
};
