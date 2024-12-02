import "./Flask.css";
import imgFlask from "../../../assets/flask.png";
import { useEffect } from "react";
import { randomWhite } from "../../../features/randomWhite";
import { v4 } from "uuid";
import { IFlask } from "../../../types/types";

interface FlaskProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  flasks: IFlask[];
  setFlask: React.Dispatch<React.SetStateAction<IFlask[]>>;
}

export default function Flask({ setCount, flasks, setFlask }: FlaskProps) {
  // const [countVis, setCountVis] = useState();
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

      setFlask((prev) => {
        // Проверяем длину массива и удаляем первый элемент, если длина равна 3
        if (prev.length === 3) {
          return [...prev.slice(1), newBomb];
        }
        return [...prev, newBomb];
      });
    };

    const interval = setInterval(generateBomb, 4200);
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
