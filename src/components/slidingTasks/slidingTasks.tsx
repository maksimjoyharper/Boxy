import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import style from "./slidingTasks.module.scss";
import imgCoin from "../../assets/webp/coin.webp";
import { useTelegram } from "../../hooks/telegram/telegram";
import { useEffect, useState } from "react";

import iconMan from "../../assets/png/task/icon_user.png";
import iconRegion from "../../assets/png/task/icon_geo.png";
import iconPhone from "../../assets/png/task/icon_phone.png";
import iconCheckbox from "../../assets/png/task/iconCheckbox.png";
import { agreementRules } from "../../variables/linkAgreement";
import { getNameBtn } from "../../features/getNameBtn";
import { ISlidingTasks } from "../../types/tasksTypes";
import {
  useCheckSubscribe,
  // useCheckSubscribeTg,
  useInfoDataUser,
  useSubscribeOnLink,
} from "../../hooks/useHooks/useTasks";

export default function SlidingTasks({
  fullHeight,
  initialHeight,
  isOpen,
  onClose,
  task,
}: ISlidingTasks) {
  const { tg, tg_id } = useTelegram();

  const openLink = (link: string): string => {
    return tg.openLink(link, { try_instant_vew: true });
  };

  const subscribeOnLink = useSubscribeOnLink(openLink, task);

  const checkSubscribe = useCheckSubscribe(onClose, tg);

  // const checkSubscribeTg = useCheckSubscribeTg(onClose);

  const handleSubscribe = () => {
    // if (task.task.link && task.task.name !== "Подписка на телеграм") {
    if (task.task.link !== null) {
      tg.HapticFeedback.impactOccurred("medium");
      subscribeOnLink.mutate({ tg_id: tg_id, don_name: task.task.dop_name });
    }
    //  else {
    //   if (task.task.link) {
    //     openLink(task.task.link);
    //     tg.HapticFeedback.impactOccurred("medium");
    //   }
    // }
  };

  const handleCheckSubscribe = () => {
    if (task.task.link) {
      if (!task.completed) {
        checkSubscribe.mutate({ tg_id: tg_id, dop_name: task.task.dop_name });
      } else {
        if (task.task.name === "Подписка на телеграм") {
          // checkSubscribeTg.mutate({ tg_id: tg_id, dop_name: task.task.dop_name });
          checkSubscribe.mutate({ tg_id: tg_id, dop_name: task.task.dop_name });
        } else {
          openLink(task.task.link);
        }
      }
      tg.HapticFeedback.impactOccurred("medium");
    }
  };

  const [name_player, setName] = useState<string>("");
  const [country, setRegion] = useState<string>("by");
  const [phone, setPhone] = useState<string>("");

  const [linkAgreem, setLinkAgreem] = useState("");

  const infoDataUser = useInfoDataUser(
    setName,
    setRegion,
    setPhone,
    onClose,
    tg
  );

  useEffect(() => {
    switch (country) {
      case "by":
        setLinkAgreem(agreementRules.by);
        break;
      case "kz":
        setLinkAgreem(agreementRules.kz);
        break;
      case "uz":
        setLinkAgreem(agreementRules.uz);
        break;
      default:
        break;
    }
  }, [country]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    tg.HapticFeedback.impactOccurred("medium");
    if (name_player && phone && country) {
      infoDataUser.mutate({ tg_id, name_player, country, phone });
    }
  };

  return (
    <SlidingPanel
      initialHeight={initialHeight}
      fullHeight={fullHeight}
      darkened
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={style.sliding__block}>
        {task.task.name === "Заполни анкету" ? (
          <form className={style.form_box} onSubmit={handleSubmit}>
            <div className={style.input_box}>
              <img className={style.icon_input} src={iconMan} />
              <input
                className={style.input_name}
                type="text"
                value={name_player}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
              />
            </div>
            <div className={style.input_box}>
              <img className={style.icon_input} src={iconRegion} />
              <select
                className={style.select_region}
                value={country}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option disabled defaultValue={"Регион"}>
                  Регион
                </option>
                <option value="by">Беларусь</option>
                <option value="kz">Казахстан</option>
                <option value="uz">Узбекистан</option>
              </select>
            </div>
            <div className={style.input_box}>
              <img className={style.icon_input} src={iconPhone} />
              <input
                className={style.input_name}
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Номер телефона"
              />
            </div>
            <button className={style.btn_submit} type="submit">
              Отправить
            </button>
            <div className={style.agreement_box}>
              <img src={iconCheckbox} className={style.iconCheckbox} />
              <span className={style.agreement_text}>
                Соглашаюсь с{" "}
                <a
                  className={style.link_agr}
                  onClick={() => openLink(linkAgreem)}
                  // href={openLink(linkAgreem)}
                >
                  условиями передачи данных
                </a>
              </span>
            </div>
          </form>
        ) : (
          <>
            <p className={style.name_title}>{task.task.name}</p>
            <div className={style.coin_box}>
              <img className={style.img_coin} src={imgCoin} alt="" />
              <span className={style.coins}>{task.task.reward_currency}</span>
            </div>
            <button onClick={handleSubscribe} className={style.btn}>
              {getNameBtn(+task.task.id)}
            </button>
            <p className={style.text_info}>
              Оставшееся время для модерации, чтобы получить награду: 1 час
            </p>
            <button onClick={handleCheckSubscribe} className={style.btn_check}>
              Проверить
            </button>{" "}
          </>
        )}
      </div>
    </SlidingPanel>
  );
}
