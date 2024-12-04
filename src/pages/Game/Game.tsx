import { useEffect, useState } from "react";
import style from "./Game.module.css";
import Letter from "../../components/cards/letters/whiteLetter/Letter";
import { v4 } from "uuid";
import Timer from "../../helpers/Timer/Timer";
import BlueLetter from "../../components/cards/letters/blueLetter/BlueLetter";
import PointCounter from "../../helpers/PointCounter/PointCounter";
import Bomb from "../../components/cards/bombs/Bomb";
import Flask from "../../components/cards/flask/Flask";
import imgOpenBox from "../../assets/open-box.png";
import { whiteLettArr } from "../../variables/whiteLettArray";
import { IBlueLettArr, IFlask, IWhiteLettArr } from "../../types/types";
import ModalRoute from "../../ui/ModalRoute/ModalRoute";
// import { randomWhite } from "../../features/randomWhite";
// import imgL from "../../assets/S-white.png";
// import useCanvas from "../../hooks/canvas/useCanvas";

export default function Game() {
  const [isVision, setIsVision] = useState(true);
  const [timer, setTimer] = useState(15);
  const [count, setCount] = useState<number>(0);
  const [whiteLetter, setWhiteLetter] = useState<IWhiteLettArr[]>([]);
  const [blueLetter, setBlueLetter] = useState<IBlueLettArr[]>([]);
  const [flasks, setFlask] = useState<IFlask[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWhiteLetter((prev) => {
        // Создаем новый массив с элементами, добавляя их в конец
        const newElements = whiteLettArr.map((item) => ({
          ...item,
          id: v4(),
          duration: Math.random() + 3, // Обновляем продолжительность
        }));
        return [...prev, ...newElements];
      });
    }, 1000); // Добавляем новые элементы каждые 2 секунды

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, []);

  const handleClick = (id: string) => {
    setWhiteLetter((prev) => prev.filter((letter) => letter.id !== id));
    setCount((prev) => prev + 1);
  };

  // const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // const [elements, setElements] = useState<IWhiteLettArr[]>(whiteLettArr);

  // const imageSrc = imgL; // Замените на URL вашего изображения
  // const image = new Image();
  // image.src = imageSrc;

  // // Функция для создания новых элементов
  // const createElement = () => {
  //   // const newElement = { x: Math.random() * 400, y: 0, img: image }; // случайная позиция по X
  //   setElements((prev) => [...prev]);
  // };

  // // Функция для обновления позиции элементов
  // const updateElements = () => {
  //   setElements(
  //     (prev) => prev.map((el) => ({ ...el, y: el.y + 2 })) // движение вниз
  //   );
  // };

  // Функция для отрисовки элементов на canvas
  // const draw = (ctx: CanvasRenderingContext2D) => {
  // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // очистка canvas
  // elements.forEach((el) => {
  //   ctx.drawImage(el.img, el.x, el.y, 50, 50); // рисуем изображение
  // });
  // };

  // const draw = (context: CanvasRenderingContext2D, count: number) => {
  //   context.clearRect(0, 0, context.canvas.width, context.canvas.height); // очистка canvas
  //   elements.forEach((el) => {
  //     const d = count % 100;

  //     context.drawImage(el.image, el.x, el.y + d, 10, 10); // рисуем изображение
  //     // updateElements();
  //   });
  // };

  // const ref = useCanvas(draw);

  // // Основная анимационная функция
  // const animate = () => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;
  //   const ctx = canvas.getContext("2d");
  //   if (!ctx) return;

  //   updateElements();
  //   draw(ctx);
  //   requestAnimationFrame(animate); // Запрос следующего кадра
  // };

  // useEffect(() => {
  //   const interval = setInterval(createElement, 2000); // создаем новый элемент каждую секунду
  //   return () => clearInterval(interval);
  // }, []);
  // useEffect(() => {
  //   const interval = setInterval(updateElements, 1000); // создаем новый элемент каждую секунду
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   requestAnimationFrame(animate); // Запускаем анимацию
  // }, []);

  // useEffect(() => {
  //   const generateLetter = () => {
  //     const newLetter = {
  //       x: randomWhite(),
  //       duration: Math.random() * 3 + 2,
  //       id: v4().toString(),
  //     };
  //     setWhiteLetter((prev) => [...prev, newLetter]);
  //   };

  //   const interval = setInterval(generateLetter, 200);
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   const generateLetter = () => {
  //     setWhiteLetter(whiteLettArr);
  //   };

  //   const interval = setTimeout(generateLetter, 100);
  //   return () => clearTimeout(interval);
  // }, []);

  return (
    // <>
    //   <canvas className={style.canv} ref={ref}></canvas>
    // </>
    <ModalRoute>
      {isVision && (
        <div className={style.falling_letters_container}>
          <Timer time={timer} setTimer={setTimer} setIsVision={setIsVision} />
          <p className={style.title_logo}>Skillbox</p>
          <PointCounter count={count} />
          {whiteLetter.map((letter) => (
            <Letter
              onClick={() => handleClick(letter.id)}
              key={letter.id}
              id={letter.id}
              x={letter.x}
              duration={letter.duration}
            />
          ))}
          <BlueLetter
            setCount={setCount}
            blueLetter={blueLetter}
            setBlueLetter={setBlueLetter}
          />
          <Flask setCount={setTimer} flasks={flasks} setFlask={setFlask} />
          <Bomb
            count={count}
            setCount={setCount}
            setWhiteLetter={setWhiteLetter}
            setBlueLetter={setBlueLetter}
            setFlask={setFlask}
          />
          <img src={imgOpenBox} className={style.img_open_box} />
        </div>
      )}
    </ModalRoute>
  );
}
