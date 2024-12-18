import { useEffect, useState } from "react";
import style from "./homeNavigation.module.scss";
import premium from "../../assets/png/premium.png";
import ticket from "../../assets/png/ticket.png";
import { useDispatch } from "react-redux";
import {
  selectPremiumTicket,
  selectRegularTicket,
} from "../../provider/StoreProvider/slice/currentTicketSlice";
import { useTelegram } from "../../hooks/telegram/telegram";

interface IHome {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  user: any;
}

function wordModificator(number: number) {
  if (number === 1) {
    return `билет`;
  } else if (number >= 2 && number < 5) {
    return `билета`;
  } else {
    return `билетов`;
  }
}

export const HomeTickets = ({ user }: IHome) => {
  const { tg } = useTelegram();
  const [selectedTicket, setSelectedTicket] = useState("regular");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectRegularTicket(true));
  }, []);
  return (
    <>
      <label
        className={`${
          selectedTicket === "premium"
            ? `${style.label__tickets} ${style.active_blue}`
            : style.label__tickets
        }`}
        htmlFor="premium-tickets"
      >
        <span className={style.home__ticket}>{user?.premium_tickets}</span>
        <span className={style.home__info}>
          {user && wordModificator(user?.premium_tickets)}
        </span>
        <img className={style.imgTicket} src={premium} alt="" />
        <input
          checked={selectedTicket === "premium"}
          onChange={() => {
            setSelectedTicket("premium");
          }}
          onClick={() => {
            dispatch(selectPremiumTicket(false));
            tg.HapticFeedback.impactOccurred("medium");
          }}
          name="tickets"
          type="radio"
        />
      </label>
      <label
        className={`${
          selectedTicket === "regular"
            ? `${style.label__tickets} ${style.active}`
            : style.label__tickets
        }`}
        htmlFor="tickets"
      >
        <span className={style.home__ticket}>{user?.tickets}</span>
        <span className={style.home__info}>
          {user && wordModificator(user?.tickets)}
        </span>
        <img className={style.imgTicket} src={ticket} alt="" />
        <input
          checked={selectedTicket === "regular"}
          onChange={() => {
            setSelectedTicket("regular");
          }}
          onClick={() => {
            dispatch(selectRegularTicket(true));
            tg.HapticFeedback.impactOccurred("medium");
          }}
          id="tickets"
          name="tickets"
          type="radio"
        />
      </label>
    </>
  );
};
