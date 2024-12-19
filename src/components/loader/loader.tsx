import style from "./loader.module.scss";
import imgOpenBox from "../../assets/webp/box__game.webp";
import { LoaderSvg } from "../../assets/svg/LoaderSvg";

export const Loader = () => {
  return (
    <div className={style.loader__section}>
      <h1 className={style.loader__title}>Подождите...</h1>
      <LoaderSvg />
      <img src={imgOpenBox} className={style.img_open_box} />
    </div>
  );
};
