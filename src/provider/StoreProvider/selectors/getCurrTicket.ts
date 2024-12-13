import { StateScheme } from "../config/StateScheme";

export const getCurrTickets = (state: StateScheme) => state.curTicket.isPremium;
