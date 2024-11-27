import "./Flask.css";
import imgFlask from "../../../assets/flask.png";
import { useEffect, useState } from "react";
import { randomWhite } from "../../../features/randomWhite";
import { v4 } from "uuid";

interface FlaskProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Flask({ setCount }: FlaskProps) {
  const [flasks, setFlask] = useState<
    { x: number; duration: number; id: string }[]
  >([]);

  const handleClickFlask = (id: string) => {
    setFlask((prev) => prev.filter((bomb) => bomb.id !== id));
    setCount((prev) => prev + 5);
  };

  useEffect(() => {
    const generateBomb = () => {
      const newBomb = {
        x: randomWhite(),
        duration: Math.random() * 3 + 2,
        id: v4().toString(),
      };
      setFlask((prev) => [...prev, newBomb]);
    };

    const interval = setInterval(generateBomb, 6000);
    return () => clearInterval(interval);
  }, []);

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
        >
          {" "}
          <img src={imgFlask} className="falling_flask" />
        </button>
      ))}
    </>
  );
}
