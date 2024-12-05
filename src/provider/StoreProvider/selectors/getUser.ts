import { StateScheme } from "../config/StateScheme";

export const getUser = (state: StateScheme) => state.user?.userInfo;
