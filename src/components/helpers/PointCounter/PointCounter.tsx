import style from "./PointCounter.module.css";

type PointCounterProps = {
  count: number;
};

export default function PointCounter({ count }: PointCounterProps) {
  return <div className={style.counter_container}>{count}</div>;
}
