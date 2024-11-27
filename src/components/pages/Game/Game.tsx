import { useEffect, useState } from "react";
import style from "./Game.module.css";
import Letter from "../../cards/letters/whiteLetter/Letter";
import { randomWhite } from "../../../features/randomWhite";
import { v4 } from "uuid";
import Timer from "../../helpers/Timer/Timer";
import BlueLetter from "../../cards/letters/blueLetter/BlueLetter";
import PointCounter from "../../helpers/PointCounter/PointCounter";
import Bomb from "../../cards/bombs/Bomb";
import Flask from "../../cards/flask/Flask";

export default function Game() {
  const [isVision, setIsVision] = useState(true);
  const [timer, setTimer] = useState(30);
  const [whiteLetter, setWhiteLetter] = useState<
    { x: number; duration: number; id: string }[]
  >([]);

  const [count, setCount] = useState<number>(0);

  const handleClick = (id: string) => {
    setWhiteLetter((prev) => prev.filter((letter) => letter.id !== id));
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    const generateLetter = () => {
      const newLetter = {
        x: randomWhite(),
        duration: Math.random() * 3 + 2,
        id: v4().toString(),
      };
      setWhiteLetter((prev) => [...prev, newLetter]);
    };

    const interval = setInterval(generateLetter, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isVision ? (
        <div className={style.falling_letters_container}>
          <Timer time={timer} setTimer={setTimer} setIsVision={setIsVision} />
          <PointCounter count={count} />
          {whiteLetter.map((letter) => (
            <Letter
              onClick={() => handleClick(letter.id)}
              key={letter.id}
              id={letter.id}
              x={letter.x}
              duration={letter.duration}
            />
          ))}
          <BlueLetter />
          <Flask setCount={setTimer} />
          <Bomb setCount={setCount} />
        </div>
      ) : null}
    </>
  );
}
