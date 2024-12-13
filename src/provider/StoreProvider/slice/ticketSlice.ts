import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TicketScheme, TicketType } from "../../../types/ticketType";

const initialState: TicketScheme = {
  tickets: {
    ticket: 0,
    premiumTicket: 0,
  },
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    addTicketStore: (state, action: PayloadAction<TicketType>) => {
      state.tickets = action.payload;
    },
    updateTicketStore: (state, action: PayloadAction<TicketType>) => {
      state.tickets = { ...state.tickets, ...action.payload };
    },
    updateTicketSumm: (
      state,
      action: PayloadAction<{ ticket: number; premiumTicket: number }>
    ) => {
      if (state.tickets) {
        state.tickets.ticket += action.payload.ticket;
        state.tickets.premiumTicket += action.payload.premiumTicket;
      }
    },
    updateTicketMinus: (
      state,
      action: PayloadAction<{ ticket: number; premiumTicket: number }>
    ) => {
      if (state.tickets) {
        state.tickets.ticket -= action.payload.ticket;
        state.tickets.premiumTicket -= action.payload.premiumTicket;
      }
    },
    changeTicketCount: (
      state,
      action: PayloadAction<{ type: "regular" | "premium"; quantity: number }>
    ) => {
      if (state.tickets) {
        if (action.payload.type === "regular") {
          state.tickets.ticket += action.payload.quantity;
        } else {
          state.tickets.premiumTicket += action.payload.quantity;
        }
      }
    },
  },
});

export const { actions: ticketActions } = ticketSlice;
export const { reducer: ticketReducer } = ticketSlice;
