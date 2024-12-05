import "./BlueLetter.css";
import imgBlueLetter from "../../../../assets/S-blue.png";
import { useEffect } from "react";
import { v4 } from "uuid";
import { IBlueLettArr } from "../../../../types/types";
import { blueLettArr } from "../../../../variables/blueLettArray";

interface BlueLetterProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  blueLetter: IBlueLettArr[];
  setBlueLetter: React.Dispatch<React.SetStateAction<IBlueLettArr[]>>;
}

const BlueLetter = ({
  setCount,
  blueLetter,
  setBlueLetter,
}: BlueLetterProps) => {
  const handleClick = (id: string) => {
    setBlueLetter((prev) => prev.filter((letter) => letter.id !== id));
    setCount((prev) => {
      if (prev <= 3) {
        prev = 0;
      } else return prev - 3;
      return prev;
    });
  };

  // const [isAtBottom, setIsAtBottom] = useState<boolean>(false);
  // const elementRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   if (elementRef.current) {
  //     const rect = elementRef.current.getBoundingClientRect();
  //     const isBottom = rect.bottom >= window.innerHeight;
  //     setIsAtBottom(isBottom);
  //   }
  //   if (isAtBottom) {
  //     setCount((prev) => prev + 3);
  //   }
  // }, [isAtBottom, blueLetter]);

  // useEffect(() => {
  //   const generateLetter = () => {
  //     const newLetter = {
  //       x: randomBlue(),
  //       id: v4().toString(),
  //       duration: Math.random() * 3 + 2,
  //     };
  //     setBlueLetter((prev) => [...prev, newLetter]);
  //   };

  //   const interval = setInterval(generateLetter, 1500);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlueLetter((prev) => {
        // Создаем новый массив с элементами, добавляя их в конец
        const newElements = blueLettArr.map((item) => ({
          ...item,
          id: v4(),
          duration: Math.random() + 2, // Обновляем продолжительность
        }));
        return [...prev, ...newElements];
      });
    }, 2000); // Добавляем новые элементы каждые 2 секунды

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, []);

  return (
    <>
      {blueLetter.map((letter) => (
        <button
          className="btn_blue"
          onTouchStart={() => handleClick(letter.id)}
          key={letter.id}
          id={letter.id}
          // ref={elementRef}
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
