import { useEffect } from "react";
import style from "./Timer.module.css";
import { formatTime } from "../../features/formatTime";

type TimerProps = {
  setIsVision: React.Dispatch<React.SetStateAction<boolean>>;
  time: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
};

export default function Timer({ setIsVision, time, setTimer }: TimerProps) {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [setTimer]);

  useEffect(() => {
    if (time === 0) {
      setIsVision(false);
    }
  }, [time]);

  return (
    <div className={style.timer_container}>
      <div className={style.time}>{formatTime(time)}</div>
    </div>
  );
}
