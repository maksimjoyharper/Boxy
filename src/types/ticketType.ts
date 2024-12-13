export interface TicketType {
  ticket: number;
  premiumTicket: number;
}

export interface TicketScheme {
  tickets?: TicketType;
}
