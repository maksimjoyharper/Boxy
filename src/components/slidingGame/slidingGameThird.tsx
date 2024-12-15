import style from "./slidingGame.module.scss";

interface ISliding {
  item: any;
  handleGo: () => void;
}

export const SlidingGameThird = ({ item, handleGo }: ISliding) => {
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
        <button onClick={handleGo} className={style.sliding__go}>
          {item.buttonGo}
        </button>
      </div>
    </div>
  );
};
