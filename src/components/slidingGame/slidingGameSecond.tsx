import style from "./slidingGame.module.scss";

interface ISliding {
  item: any;
  handleNext: () => void;
}

export const SlidingGameSecond = ({ item, handleNext }: ISliding) => {
  return (
    <div className={style.sliding__panel_second} key={item.id}>
      <img
        width={"100%"}
        height={510}
        className={style.img__second}
        src={item.img}
        alt=""
      />
      <div className={style.second__block}>
        <p className={style.sliding__label_second}>{item.label}</p>
        <button onClick={handleNext} className={style.sliding__go}>
          {item.buttonNext}
        </button>
      </div>
    </div>
  );
};
