import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserProps, UserScheme } from "../../../types/userType";

const initialState: UserScheme = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserStore: (state, action: PayloadAction<fetchUserProps>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
