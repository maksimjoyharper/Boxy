import { useState } from "react";
import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import style from "./slidingGame.module.scss";
import { slidingArr } from "./slidingData";
import { useNavigate } from "react-router-dom";
import { fetchUserProps } from "../../types/userType";

interface ISliding {
  isOpen: boolean;
  onClose: () => void;
  initialHeight: string;
  fullHeight: string;
  user: fetchUserProps | undefined;
}

export const SlidingGame = ({
  isOpen,
  onClose,
  fullHeight,
  initialHeight,
  user,
}: ISliding) => {
  const [page, setPage] = useState(1);

  const oneStep = 1;
  const navigate = useNavigate();

  const handleStartGame = () => {
    if (user) {
      if (user?.tickets > 0) {
        navigate("game");
      } else if (user.premium_tickets > 0) {
        navigate("game");
      }
    }
  };

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
                  <button
                    onClick={handleStartGame}
                    className={style.sliding__go}
                  >
                    {item.buttonGo}
                  </button>
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
      </div>
    </SlidingPanel>
  );
};
