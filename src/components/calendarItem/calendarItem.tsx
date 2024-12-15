import { BonusInfoArray } from "../../types/userType";
import style from "./calendarItem.module.scss";
import premium from "../../assets/png/premium.png";
import regular from "../../assets/png/ticket.png";
import { CalendarSvg } from "../../assets/svg/CalendarSvg";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";
import { CalendarCheckSvg } from "../../assets/svg/CalendarCheckSvg";

interface ICalendarItem {
  bonus_info: BonusInfoArray;
  conclusive_day?: number;
}

export const CalendarItem = ({ bonus_info, conclusive_day }: ICalendarItem) => {
  const user = useSelector(getUser);

  return (
    <>
      {bonus_info.map((element, index) => (
        <li
          className={
            conclusive_day === element.day
              ? `${style.blue} ${style.calendar__item}`
              : style.calendar__item
          }
          key={index}
        >
          <h3 className={style.calendar__day}>{element.day} день</h3>
          <ul className={style.calendar__grid}>
            {user && user.consecutive_days <= element.day ? (
              <>
                {element.points && (
                  <li className={style.calendar__bonus}>
                    <span style={{ color: "#fff" }}>{element.points}</span>
                    <CalendarSvg />
                  </li>
                )}
                {element.premium_tickets && (
                  <li className={style.calendar__bonus}>
                    <span style={{ color: "#fff" }}>
                      {element.premium_tickets}
                    </span>
                    <img width={28} height={28} src={premium} alt="" />
                  </li>
                )}
                {element.tickets && (
                  <li className={style.calendar__bonus}>
                    <span style={{ color: "#fff" }}>{element.tickets}</span>
                    <img width={28} height={28} src={regular} alt="" />
                  </li>
                )}
              </>
            ) : (
              <li>
                <CalendarCheckSvg />
              </li>
            )}
          </ul>
        </li>
      ))}
    </>
  );
};
