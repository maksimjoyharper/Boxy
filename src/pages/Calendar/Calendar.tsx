import style from "./Calendar.module.scss";
import { Modal } from "../../ui/Modal/Modal";
import { useState } from "react";
import skillbox from "../../assets/png/skillbox__box.png";

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      classNameCont={style.calendar__content}
      lazy
      isOpen={isOpen}
      onClose={handleClose}
    >
      <h1 className={style.calendar__title}>Ежедневная награда</h1>
      <ul></ul>
      <div className={style.calendar__info}>
        <h2 className={style.calendar__date}>31 день</h2>
        <ul className={style.calendar__prize}>
          <li>1 элемент</li>
        </ul>
        <button className={style.calendar__button}>Забрать награду</button>
      </div>
      <img src={skillbox} alt="skillbox box" />
    </Modal>
  );
};

export default Calendar;
