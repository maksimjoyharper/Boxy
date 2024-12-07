import "./Flask.css";
import imgFlask from "../../../assets/flask.png";
import { useEffect, useState } from "react";
import { randomWhite } from "../../../features/randomWhite";
import { v4 } from "uuid";
import { IFlask } from "../../../types/types";
import { useTelegram } from "../../../hooks/telegram/telegram";

interface FlaskProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  flasks: IFlask[];
  setFlask: React.Dispatch<React.SetStateAction<IFlask[]>>;
}

export default function Flask({ setCount, flasks, setFlask }: FlaskProps) {
  const { tg } = useTelegram();
  const handleClickFlask = (id: string) => {
    setFlask((prev) => prev.filter((bomb) => bomb.id !== id));
    setCount((prev) => prev + 5);
    tg.HapticFeedback.impactOccurred("light");
  };
  const [flaskCount, setFlaskCount] = useState(0);

  useEffect(() => {
    const generateFlask = () => {
      if (flaskCount < 3) {
        const newFlask = {
          x: randomWhite(),
          duration: Math.random() + 2,
          id: v4().toString(),
        };
        setFlask((prev) => [...prev, newFlask]);
        setFlaskCount((prev) => prev + 1);
      }
    };

    const interval = setInterval(generateFlask, 4200);
    return () => clearInterval(interval);
  }, [flaskCount]);

  return (
    <>
      {flasks.map((flask) => (
        <button
          className="btn_flask"
          onTouchStart={() => handleClickFlask(flask.id)}
          id={flask.id}
          style={{
            left: `${flask.x}%`,
            animationDuration: `${flask.duration}s`,
          }}
          key={flask.id}
        >
          {" "}
          <img src={imgFlask} className="falling_flask" />
        </button>
      ))}
    </>
  );
}
