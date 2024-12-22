import { useEffect, useState } from "react";
import style from "./Game.module.css";
import Letter from "../../components/cards/letters/whiteLetter/Letter";
import { v4 } from "uuid";
import Timer from "../../helpers/Timer/Timer";
import BlueLetter from "../../components/cards/letters/blueLetter/BlueLetter";
import PointCounter from "../../helpers/PointCounter/PointCounter";
import Bomb from "../../components/cards/bombs/Bomb";
import Flask from "../../components/cards/flask/Flask";
import imgOpenBox from "../../assets/webp/box__game.webp";
import { whiteLettArr } from "../../variables/whiteLettArray";
import { IBlueLettArr, IFlask, IWhiteLettArr } from "../../types/types";
import ModalRoute from "../../ui/ModalRoute/ModalRoute";
import logo from "../../assets/webp/logo.webp";
import { useTelegram } from "../../hooks/telegram/telegram";
import ModalGameOver from "../../ui/ModalGameOver/ModalGameOver";
import { useSelector } from "react-redux";
import { getCurrTickets } from "../../provider/StoreProvider/selectors/getCurrTicket";
import { Loader } from "../../components/loader/loader";
import { fetchGameProps } from "../../types/gameTypes";
import { useGame } from "../../hooks/useHooks/useGame";

export default function Game() {
  const [startGame, setStartGame] = useState(true);
  const [timer, setTimer] = useState(15);
  const [count, setCount] = useState<number>(0);
  const [whiteLetter, setWhiteLetter] = useState<IWhiteLettArr[]>([]);
  const [blueLetter, setBlueLetter] = useState<IBlueLettArr[]>([]);
  const [flasks, setFlask] = useState<IFlask[]>([]);
  const { tg, tg_id } = useTelegram();
  const ticket = useSelector(getCurrTickets);

  const useGameMutation = useGame();

  const dataMutate: fetchGameProps = {
    tg_id: tg_id,
    tickets: 1,
  };

  const dataMutatePrem: fetchGameProps = {
    tg_id: tg_id,
    premium_tickets: 1,
  };

  useEffect(() => {
    if (ticket) {
      useGameMutation.mutate(dataMutate);
    } else {
      useGameMutation.mutate(dataMutatePrem);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWhiteLetter((prev) => {
        // Создаем новый массив с элементами, добавляя их в конец
        const newElements = whiteLettArr.map((item) => ({
          ...item,
          id: v4(),
          duration: Math.random() + 1.8, // Обновляем продолжительность
        }));
        return [...prev, ...newElements];
      });
    }, 800); // Добавляем новые  каждые 2 секунды

    return () => clearInterval(interval); // Очищаем интервал
  }, []);

  const handleClick = (id: string) => {
    setWhiteLetter((prev) => prev.filter((letter) => letter.id !== id));
    setCount((prev) => prev + 1);
    tg.HapticFeedback.impactOccurred("light");
  };

  return (
    <ModalRoute>
      {useGameMutation.isPending ? (
        <Loader />
      ) : (
        <div className={style.falling_letters_container}>
          <Timer time={timer} setTimer={setTimer} setIsVision={setStartGame} />
          <img width={69} height={15} src={logo} className={style.logo} />
          <PointCounter count={count} />
          <img src={imgOpenBox} className={style.img_open_box} />
          {startGame ? (
            <>
              {whiteLetter.map((letter) => (
                <Letter
                  onClick={() => handleClick(letter.id)}
                  key={letter.id}
                  id={letter.id}
                  x={letter.x}
                  duration={letter.duration}
                />
              ))}
              <BlueLetter
                setCount={setCount}
                blueLetter={blueLetter}
                setBlueLetter={setBlueLetter}
              />
              <Flask setCount={setTimer} flasks={flasks} setFlask={setFlask} />
              <Bomb
                setCount={setCount}
                setWhiteLetter={setWhiteLetter}
                setBlueLetter={setBlueLetter}
                setFlask={setFlask}
              />
            </>
          ) : (
            <ModalGameOver finalPoints={count} />
          )}
        </div>
      )}
    </ModalRoute>
  );
}
