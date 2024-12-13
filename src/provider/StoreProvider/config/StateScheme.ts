import { CurrentTicketState, TicketScheme } from "../../../types/ticketType";
import { UserScheme } from "../../../types/userType";

export interface StateScheme {
  user: UserScheme;
  tickets: TicketScheme;
  curTicket: CurrentTicketState;
}
