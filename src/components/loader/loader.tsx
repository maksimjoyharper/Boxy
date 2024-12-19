import style from "./loader.module.scss";
import imgOpenBox from "../../assets/webp/box__game.webp";

import imgS from "../../assets/S-white.png";
import imgLoadCircle from "../../assets/png/load-circle.png";

export const Loader = () => {
  return (
    <div className={style.loader__section}>
      <h1 className={style.loader__title}>Подождите...</h1>
      <div className={style.img_load_box}>
        <img src={imgS} className={style.img_letter} />
        <img src={imgLoadCircle} className={style.imgLoadCircle} />
      </div>
      <img src={imgOpenBox} className={style.img_open_box} />
    </div>
  );
};
