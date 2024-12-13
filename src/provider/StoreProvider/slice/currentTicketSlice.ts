import { createSlice } from "@reduxjs/toolkit";
import { CurrentTicketState } from "../../../types/ticketType";

const initialState: CurrentTicketState = {
  isPremium: true,
};

const currentTicketSlice = createSlice({
  name: "currentTicket",
  initialState,
  reducers: {
    selectPremiumTicket(state) {
      state.isPremium = false;
    },
    selectRegularTicket(state) {
      state.isPremium = true;
    },
  },
});

export const { selectPremiumTicket, selectRegularTicket } =
  currentTicketSlice.actions;

// export default currentTicketSlice.reducer;

// export const { actions: ticketActions } = currentTicketSlice;
export const { reducer: ticketCurrReducer } = currentTicketSlice;
