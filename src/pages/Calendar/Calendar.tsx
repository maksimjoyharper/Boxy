import style from "./Calendar.module.scss";
import { Modal } from "../../ui/Modal/Modal";
import skillbox from "../../assets/png/skillbox__box.png";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";
import { CalendarItem } from "../../components/calendarItem/calendarItem";
import { CalendarSvg } from "../../assets/svg/CalendarSvg";
import premium from "../../assets/png/premium__calendar.png";
import regular from "../../assets/png/regular__calendar.png";

interface ICalendar {
  isOpen: boolean;
  onClose: () => void;
}

const Calendar = ({ isOpen, onClose }: ICalendar) => {
  const user = useSelector(getUser);

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      <h1 className={style.calendar__title}>Ежедневная награда</h1>
      <ul className={style.calendar__list}>
        <CalendarItem
          conclusive_day={user && user.consecutive_days}
          bonus_info={user?.bonus_info || []}
        />
      </ul>
      {user?.bonus_info
        .filter((element) => element.day === user.consecutive_days)
        .map((item) => (
          <div className={style.calendar__info}>
            <ul className={style.calendar__prize}>
              {item.points && (
                <li className={style.calendar__bonus}>
                  <CalendarSvg />
                  <span>{item.points}</span>
                </li>
              )}
              {item.premium_tickets && (
                <li className={style.calendar__bonus}>
                  <img width={51} height={51} src={premium} alt="" />
                  <span>{item.premium_tickets}</span>
                </li>
              )}
              {item.tickets && (
                <li className={style.calendar__bonus}>
                  <img width={51} height={51} src={regular} alt="" />
                  <span>{item.tickets}</span>
                </li>
              )}
            </ul>
            <button onClick={onClose} className={style.calendar__button}>
              Забрать награду
            </button>
          </div>
        ))}

      <img src={skillbox} alt="skillbox box" />
    </Modal>
  );
};

export default Calendar;
