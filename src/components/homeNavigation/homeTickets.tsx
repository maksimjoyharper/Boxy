import { useState } from "react";
import style from "./homeNavigation.module.scss";
import { NavigationTicketSvg } from "../../assets/svg/NavigationTicketSvg";
import { fetchUserProps } from "../../types/userType";

interface IHome {
  user: fetchUserProps;
}

function wordModificator(number: number) {
  if (number === 1) {
    return `${number} билет`;
  } else if (number >= 2 && number < 5) {
    return `${number} билета`;
  } else {
    return `${number} билетов`;
  }
}

export const HomeTickets = ({ user }: IHome) => {
  const [selectedTicket, setSelectedTicket] = useState("regular");

  return (
    <>
      <label
        className={`${
          selectedTicket === "premium"
            ? `${style.label__tickets} ${style.active}`
            : style.label__tickets
        }`}
        htmlFor="premium-tickets"
      >
        <span>{user && wordModificator(user?.premium_tickets)}</span>
        <NavigationTicketSvg />
        <input
          checked={selectedTicket === "premium"}
          onChange={() => setSelectedTicket("premium")}
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
        <span>{user && wordModificator(user?.tickets)}</span>
        <input
          checked={selectedTicket === "regular"}
          onChange={() => setSelectedTicket("regular")}
          id="tickets"
          name="tickets"
          type="radio"
        />
      </label>
    </>
  );
};
