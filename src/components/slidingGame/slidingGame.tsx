import { useState } from "react";
import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import style from "./slidingGame.module.scss";
import { slidingArr } from "./slidingData";

interface ISliding {
  isOpen: boolean;
  onClose: () => void;
  initialHeight: string;
  fullHeight: string;
}

export const SlidingGame = ({
  isOpen,
  onClose,
  fullHeight,
  initialHeight,
}: ISliding) => {
  const [page, setPage] = useState(1);
  const oneStep = 1;

  return (
    <SlidingPanel
      initialHeight={initialHeight}
      fullHeight={fullHeight}
      darkened
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={style.sliding__block}>
        {slidingArr.slice((page - 1) * oneStep, page * oneStep).map((item) => (
          <div className={style.sliding__panel} key={item.id}>
            {page.valueOf() === 1 && (
              <>
                <img src={item.img} alt="" />
                <h2 className={style.sliding__title}>{item.title}</h2>
                <p className={style.sliding__label}>{item.label}</p>
                {item.buttonGo && (
                  <button className={style.sliding__go}>{item.buttonGo}</button>
                )}
                {item.buttonInst && (
                  <button
                    className={style.sliding__inst}
                    onClick={() => setPage(page + 1)}
                  >
                    {item.buttonInst}
                  </button>
                )}
              </>
            )}
          </div>
        ))}

        <div className={style.navigation}>
          {page > 1 && (
            <button
              className={style.navigation__button}
              onClick={() => setPage(page - 1)}
            >
              Назад
            </button>
          )}
          {page < slidingArr.length && (
            <button
              className={style.navigation__button}
              onClick={() => setPage(page + 1)}
            >
              Вперед
            </button>
          )}
        </div>
      </div>
    </SlidingPanel>
  );
};
