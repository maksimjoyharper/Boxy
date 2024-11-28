import "./BlueLetter.css";
import imgBlueLetter from "../../../../assets/S-blue.png";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { randomBlue } from "../../../../features/randomBlue";

interface BlueLetterProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const BlueLetter = ({ setCount }: BlueLetterProps) => {
  const [blueLetter, setBlueLetter] = useState<{ x: number; id: string }[]>([]);

  const handleClick = (id: string) => {
    setBlueLetter((prev) => prev.filter((letter) => letter.id !== id));
    setCount((prev) => prev - 3);
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

  useEffect(() => {
    const generateLetter = () => {
      const newLetter = {
        x: randomBlue(),
        id: v4().toString(),
      };
      setBlueLetter((prev) => [...prev, newLetter]);
    };

    const interval = setInterval(generateLetter, 1500);
    return () => clearInterval(interval);
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
          }}
        >
          {" "}
          <img className="falling_letter" src={imgBlueLetter} />
        </button>
      ))}
    </>
  );
};

export default BlueLetter;
