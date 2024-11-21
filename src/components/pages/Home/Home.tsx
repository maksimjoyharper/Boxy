import { v4 } from "uuid";
import style from "./Home.module.css";
import whiteLetter from "../../../assets/S-white.png";

import { useEffect, useState } from "react";
import { randomWhite } from "../../../features/randomWhite";

interface IBox {
  id: string;
  position: string;
}

export default function Home() {
  const [objects, setObjects] = useState<IBox[]>([]);
  const newDots: IBox = { id: "", position: "" };
  useEffect(() => {
    const interval = setInterval(() => {
      setObjects((prev) => [
        ...prev,
        // { id: v4(), position: `${Math.random() * 100}%` },
        {
          id: (newDots.id = v4()),
          position: (newDots.position = `${randomWhite()}%`),
        },
      ]);
    }, 300);

    return () => clearInterval(interval);
  }, [objects]);

  useEffect(() => {
    const deleteDots = setTimeout(() => {
      setObjects((prevDots) => prevDots.filter((dot) => dot.id !== newDots.id));
    }, 1000);

    return clearTimeout(deleteDots);
  }, []);

  return (
    <div className={style.falling_objects_container}>
      {objects.map((item) => (
        <img
          src={whiteLetter}
          // onClick={}
          key={item.id}
          className={style.falling_object}
          style={{ left: item.position }}
        />
      ))}
    </div>
  );
}
