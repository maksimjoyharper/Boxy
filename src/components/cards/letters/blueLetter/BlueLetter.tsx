import "./BlueLetter.css";
import imgBlueLetter from "../../../../assets/S-blue.png";
import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import { blueLettArr } from "../../../../variables/blueLettArray";
import { useTelegram } from "../../../../hooks/telegram/telegram";
import { BlueLetterProps } from "../../../../types/gameTypes";

const BlueLetter = ({
  setCount,
  blueLetter,
  setBlueLetter,
}: BlueLetterProps) => {
  const { tg } = useTelegram();
  const letterRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [letterCount, setLetterCount] = useState(0);
  const handleClick = (id: string) => {
    setBlueLetter((prev) => prev.filter((letter) => letter.id !== id));
    setCount((prev) => prev - 3);
    tg.HapticFeedback.impactOccurred("light");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (letterCount < 5) {
        const newElements = blueLettArr.map((item) => ({
          ...item,
          id: v4(),
          duration: Math.random() + 2, // Обновляем продолжительность
        }));
        setBlueLetter((prev) => {
          // Создаем новый массив с элементами, добавляя их в конец
          return [...prev, ...newElements];
        });
        setLetterCount((prev) => prev + 1);
      }
    }, 2000); // Добавляем новые элементы каждые 2 секунды

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, [letterCount]);

  useEffect(() => {
    const checkPosition = () => {
      letterRefs.current.forEach((letter) => {
        if (letter) {
          const rect = letter.getBoundingClientRect();
          if (rect.bottom >= window.innerHeight) {
            setCount((prev) => prev + 3);
            setBlueLetter((prev) =>
              prev.filter((lett) => lett.id !== letter.id)
            );
          }
        }
      });
    };

    const interval = setInterval(checkPosition, 10); // Проверяем положение каждые 100 мс

    return () => clearInterval(interval);
  }, [blueLetter, setCount, setBlueLetter]);

  return (
    <>
      {blueLetter.map((letter, index) => (
        <button
          className="btn_blue"
          onTouchStart={() => handleClick(letter.id)}
          key={letter.id}
          id={letter.id}
          ref={(el) => (letterRefs.current[index] = el)}
          style={{
            left: `${letter.x}%`,
            animationDuration: `${letter.duration}s`,
          }}
        >
          {" "}
          <img className="falling_letter_blue" src={imgBlueLetter} />
        </button>
      ))}
    </>
  );
};

export default BlueLetter;
