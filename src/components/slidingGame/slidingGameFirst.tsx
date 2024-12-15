import style from "./slidingGame.module.scss";

interface ISliding {
  item: any;
  handleStart: () => void;
  handleNext: () => void;
}

export const SlidingGameFirst = ({
  item,
  handleStart,
  handleNext,
}: ISliding) => {
  return (
    <div className={style.sliding__panel} key={item.id}>
      <img width={215} height={215} src={item.img} alt="" />
      <h2 className={style.sliding__title}>{item.title}</h2>
      <p className={style.sliding__label}>{item.label}</p>
      <button onClick={handleStart} className={style.sliding__go}>
        {item.buttonGo}
      </button>
      <button className={style.sliding__inst} onClick={handleNext}>
        {item.buttonInst}
      </button>
    </div>
  );
};
