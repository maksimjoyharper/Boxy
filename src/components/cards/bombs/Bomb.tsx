import "./Bomb.css";
import imgBomb from "../../../assets/bomb.png";
import { useEffect, useState } from "react";
import { randomWhite } from "../../../features/randomWhite";
import { v4 } from "uuid";
import { IBlueLettArr, IFlask, IWhiteLettArr } from "../../../types/types";
import { useTelegram } from "../../../hooks/telegram/telegram";

interface BombProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setWhiteLetter: React.Dispatch<React.SetStateAction<IWhiteLettArr[]>>;
  setBlueLetter: React.Dispatch<React.SetStateAction<IBlueLettArr[]>>;
  setFlask: React.Dispatch<React.SetStateAction<IFlask[]>>;
}

export default function Bomb({
  setCount,
  setWhiteLetter,
  setBlueLetter,
  setFlask,
}: BombProps) {
  const [bombs, setBomb] = useState<
    { x: number; duration: number; id: string }[]
  >([]);
  const { tg } = useTelegram();

  const handleClickBomb = (id: string) => {
    setBomb((prev) => prev.filter((bomb) => bomb.id !== id));
    setWhiteLetter([]);
    setBlueLetter([]);
    setFlask([]);
    setCount((prev) => prev - 10);

    tg.HapticFeedback.impactOccurred("heavy");
  };

  useEffect(() => {
    const generateBomb = () => {
      const newBomb = {
        x: randomWhite(),
        duration: Math.random() + 2,
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
          key={bomb.id}
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
