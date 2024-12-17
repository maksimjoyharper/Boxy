import { useState } from "react";
import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import style from "./slidingGame.module.scss";
import { slidingArr } from "./slidingData";
import { useNavigate } from "react-router-dom";
import { fetchUserProps } from "../../types/userType";
import { useSelector } from "react-redux";
import { getCurrTickets } from "../../provider/StoreProvider/selectors/getCurrTicket";
import { SlidingGameFirst } from "./slidingGameFirst";
import { SlidingGameSecond } from "./slidingGameSecond";
import { SlidingGameThird } from "./slidingGameThird";

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
  const ticket = useSelector(getCurrTickets);
  const navigate = useNavigate();

  const handleStartGame = () => {
    if (user) {
      if (user?.tickets > 0 && ticket === true) {
        navigate("/game");
        onClose();
      } else if (user.premium_tickets > 0 && ticket === false) {
        navigate("/game");
        onClose();
      }
    }
  };

  return (
    <>
      <SlidingPanel
        initialHeight={initialHeight}
        fullHeight={fullHeight}
        darkened
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className={style.sliding__block}>
          {slidingArr
            .slice((page - 1) * oneStep, page * oneStep)
            .map((item) => {
              switch (item.id) {
                case 1:
                  return (
                    <SlidingGameFirst
                      key={item.id}
                      item={item}
                      handleStart={handleStartGame}
                      handleNext={() => setPage(page + 1)}
                    />
                  );
                case 2:
                  return (
                    <SlidingGameSecond
                      key={item.id}
                      item={item}
                      handleNext={() => setPage(page + 1)}
                    />
                  );
                case 3:
                  return (
                    <SlidingGameThird
                      key={item.id}
                      item={item}
                      handleGo={handleStartGame}
                    />
                  );
                default:
                  return null;
              }
            })}
        </div>
      </SlidingPanel>
    </>
  );
};
