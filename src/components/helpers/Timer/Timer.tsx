import { useEffect, useState } from "react";
import style from "./Timer.module.css";
import { formatTime } from "../../../features/formatTime";

type TimerProps = {
  setIsVision: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Timer({ setIsVision }: TimerProps) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      setIsVision(false);
    }
  }, [timer]);

  return (
    <div className={style.timer_container}>
      <div className={style.time}>{formatTime(timer)}</div>
    </div>
  );
}
