import "./BlueLetter.css";
import imgBlueLetter from "../../../../assets/S-blue.png";
import { useEffect, useState } from "react";
import { randomWhite } from "../../../../features/randomWhite";
import { v4 } from "uuid";

const BlueLetter: React.FC = () => {
  const [blueLetter, setBlueLetter] = useState<
    { x: number; duration: number; id: string }[]
  >([]);

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
      {blueLetter.map((letter) => (
        <img
          id={letter.id}
          src={imgBlueLetter}
          className="falling_letter"
          style={{
            left: `${letter.x}%`,
            animationDuration: `${letter.duration}s`,
          }}
        />
      ))}
    </>
  );
};

export default BlueLetter;
