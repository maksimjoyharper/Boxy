import style from "./calendarItem.module.scss";
import premium from "../../assets/png/premium.png";
import regular from "../../assets/png/ticket.png";
import { CalendarCheckSvg } from "../../assets/svg/CalendarCheckSvg";
import coin from "../../assets/webp/coin__calendar.webp";
import React from "react";

interface ICalendarItem {
  index: number;
  day: number;
  points: number;
  premium_tickets: number;
  tickets: number;
  consecutive_days: number;
}

export const CalendarItem = ({
  index,
  day,
  points,
  premium_tickets,
  tickets,
  consecutive_days,
}: ICalendarItem) => {
  return (
    <React.Fragment key={index}>
      <h3 className={style.calendar__day}>{day} день</h3>
      <ul className={style.calendar__grid}>
        {consecutive_days <= day ? (
          <>
            {points && (
              <li className={style.calendar__bonus}>
                <span style={{ color: "#fff" }}>{points}</span>
                <img width={28} height={28} src={coin} alt="" />
              </li>
            )}
            {premium_tickets && (
              <li className={style.calendar__bonus}>
                <span style={{ color: "#fff" }}>{premium_tickets}</span>
                <img width={28} height={28} src={premium} alt="" />
              </li>
            )}
            {tickets && (
              <li className={style.calendar__bonus}>
                <span style={{ color: "#fff" }}>{tickets}</span>
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
    </React.Fragment>
  );
};
