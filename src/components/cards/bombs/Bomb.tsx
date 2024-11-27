import "./Bomb.css";
import imgBomb from "../../../assets/bomb.png";
import { useEffect, useState } from "react";
import { randomWhite } from "../../../features/randomWhite";
import { v4 } from "uuid";

interface BombProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Bomb({ setCount }: BombProps) {
  const [bombs, setBomb] = useState<
    { x: number; duration: number; id: string }[]
  >([]);

  const handleClickBomb = (id: string) => {
    setBomb((prev) => prev.filter((bomb) => bomb.id !== id));
    setCount((prev) => prev - 5);
  };

  useEffect(() => {
    const generateBomb = () => {
      const newBomb = {
        x: randomWhite(),
        duration: Math.random() * 3 + 2,
        id: v4().toString(),
      };
      setBomb((prev) => [...prev, newBomb]);
    };

    const interval = setInterval(generateBomb, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {bombs.map((bomb) => (
        <button
          className="btn_bomb"
          onTouchStart={() => handleClickBomb(bomb.id)}
          id={bomb.id}
          style={{ left: `${bomb.x}%`, animationDuration: `${bomb.duration}s` }}
        >
          {" "}
          <img src={imgBomb} className="falling_bomb" />
        </button>
      ))}
    </>
  );
}
