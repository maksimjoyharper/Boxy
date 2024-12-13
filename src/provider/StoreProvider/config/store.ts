import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateScheme } from "./StateScheme";
import { userReducer } from "../slice/userSlice";
import { ticketReducer } from "../slice/ticketSlice";
import { ticketCurrReducer } from "../slice/currentTicketSlice";

export function createReduxStore(initialState?: StateScheme) {
  const rootReducer: ReducersMapObject<StateScheme> = {
    user: userReducer,
    tickets: ticketReducer,
    curTicket: ticketCurrReducer,
  };

  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
