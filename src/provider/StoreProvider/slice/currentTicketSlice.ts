import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentTicketState } from "../../../types/ticketType";

const initialState: CurrentTicketState = {
  isPremium: true,
};

const currentTicketSlice = createSlice({
  name: "currentTicket",
  initialState,
  reducers: {
    selectPremiumTicket(state, action: PayloadAction<boolean>) {
      state.isPremium = action.payload;
    },
    selectRegularTicket(state, action: PayloadAction<boolean>) {
      state.isPremium = action.payload;
    },
  },
});

export const { selectPremiumTicket, selectRegularTicket } =
  currentTicketSlice.actions;

// export default currentTicketSlice.reducer;

// export const { actions: ticketActions } = currentTicketSlice;
export const { reducer: ticketCurrReducer } = currentTicketSlice;
