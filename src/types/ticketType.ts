export interface TicketType {
  ticket: number;
  premiumTicket: number;
}

export interface TicketScheme {
  tickets?: TicketType;
}

export interface CurrentTicketState {
  isPremium: boolean;
}

export interface CurrTicketScheme {
  isPremium?: CurrentTicketState;
}
