import { useEffect, useState } from "react";
import { Modal } from "../../ui/Modal/Modal";
import { onboardingArr } from "./onboardingData";
import style from "./onboarding.module.scss";
import { useTelegram } from "../../hooks/telegram/telegram";
import { OnboardingFirst } from "./onboardingFirst";
import { OnboardingSecond } from "./onboardingSecond";
import { OnboardingThird } from "./onboardingThird";
import { OnboardingFourth } from "./onboardingFourth";
import { OnboardingFifth } from "./onboardingFifth";
import { OnboardingSixth } from "./onboardingSixth";
import { OnboardingSeventh } from "./onboardingSeventh";
import { useOnboarding } from "../../hooks/useHooks/useOnboarding";

interface IOnboarding {
  isOpen: boolean;
  onClose: () => void;
}

export const Onboarding = ({ isOpen, onClose }: IOnboarding) => {
  const [page, setPage] = useState(1);
  const oneStep = 1;
  const { tg_id } = useTelegram();

  const preloadImages = (imageUrls: string[]) => {
    imageUrls.forEach((url: string) => {
      const img = new Image();
      img.src = url;
    });
  };

  useEffect(() => {
    if (isOpen) {
      const allImages = onboardingArr.map((item) => item.image);
      preloadImages(allImages);
    }
  }, [isOpen]);

  const onbMutate = useOnboarding();

  const handleFetch = (tg_id: string) => {
    onbMutate.mutate({ tg_id });
    onClose();
  };

  return (
    <Modal onClose={onClose} lazy isOpen={isOpen}>
      <ul className={style.onboarding__list}>
        {onboardingArr
          .slice((page - 1) * oneStep, page * oneStep)
          .map((item) => {
            switch (item.id) {
              case 1:
                return (
                  <OnboardingFirst
                    key={item.id}
                    id={item.id}
                    img={item.image}
                    title={item.title}
                    label={item.label}
                    buttonStart={() => setPage(page + 1)}
                  />
                );
              case 2:
                return (
                  <OnboardingSecond
                    key={item.id}
                    id={item.id}
                    img={item.image}
                    title={item.title}
                    label={item.label}
                    buttonPrev={() => setPage(page - 1)}
                    buttonNext={() => setPage(page + 1)}
                  />
                );
              case 3:
                return (
                  <OnboardingThird
                    key={item.id}
                    id={item.id}
                    img={item.image}
                    title={item.title}
                    label={item.label}
                    buttonPrev={() => setPage(page - 1)}
                    buttonNext={() => setPage(page + 1)}
                  />
                );
              case 4:
                return (
                  <OnboardingFourth
                    key={item.id}
                    id={item.id}
                    img={item.image}
                    title={item.title}
                    label={item.label}
                    buttonPrev={() => setPage(page - 1)}
                    buttonNext={() => setPage(page + 1)}
                  />
                );
              case 5:
                return (
                  <OnboardingFifth
                    key={item.id}
                    id={item.id}
                    img={item.image}
                    title={item.title}
                    label={item.label}
                    buttonPrev={() => setPage(page - 1)}
                    buttonNext={() => setPage(page + 1)}
                  />
                );
              case 6:
                return (
                  <OnboardingSixth
                    key={item.id}
                    id={item.id}
                    img={item.image}
                    title={item.title}
                    label={item.label}
                    buttonPrev={() => setPage(page - 1)}
                    buttonNext={() => setPage(page + 1)}
                  />
                );
              case 7:
                return (
                  <OnboardingSeventh
                    key={item.id}
                    id={item.id}
                    img={item.image}
                    title={item.title}
                    label={item.label}
                    buttonEnd={() => handleFetch(tg_id)}
                  />
                );
              default:
                return null;
            }
          })}
      </ul>
    </Modal>
  );
};
