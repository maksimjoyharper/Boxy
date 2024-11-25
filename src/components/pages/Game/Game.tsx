import { useEffect, useState } from "react";
import style from "./Game.module.css";
import Letter from "../../cards/letters/whiteLetter/Letter";
import { randomWhite } from "../../../features/randomWhite";
import { v4 } from "uuid";
import Timer from "../../helpers/Timer/Timer";
import BlueLetter from "../../cards/letters/blueLetter/BlueLetter";

export default function Game() {
  const [isVision, setIsVision] = useState(true);
  const [whiteLetter, setWhiteLetter] = useState<
    { x: number; duration: number; id: string }[]
  >([]);

  const [blueLetter, setBlueLetter] = useState<
    { x: number; duration: number; id: string }[]
  >([]);

  const handleClick = (id: string) => {
    setWhiteLetter((prev) => prev.filter((letter) => letter.id !== id));
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

    const interval = setInterval(generateLetter, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const generateLetter = () => {
      const newLetter = {
        x: randomWhite(),
        duration: Math.random() * 3 + 2,
        id: v4().toString(),
      };
      setBlueLetter((prev) => [...prev, newLetter]);
    };

    const interval = setInterval(generateLetter, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isVision ? (
        <div className={style.falling_letters_container}>
          <Timer setIsVision={setIsVision} />
          {whiteLetter.map((letter) => (
            <Letter
              onClick={() => handleClick(letter.id)}
              key={letter.id}
              id={letter.id}
              x={letter.x}
              duration={letter.duration}
            />
          ))}

          {blueLetter.map((letter) => (
            <BlueLetter
              key={letter.id}
              id={letter.id}
              x={letter.x}
              duration={letter.duration}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
