import style from "./calendarItem.module.scss";
import premium from "../../assets/png/premium.png";
import regular from "../../assets/png/ticket.png";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";
import { CalendarCheckSvg } from "../../assets/svg/CalendarCheckSvg";
import coin from "../../assets/webp/coin.webp";
import { ICalendarItem } from "../../types/calendarTypes";

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
                    <img width={18} height={18} src={coin} alt="" />
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
