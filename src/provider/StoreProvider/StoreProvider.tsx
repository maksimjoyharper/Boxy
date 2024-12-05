import { ReactNode } from "react";
import { Provider } from "react-redux";
import { StateScheme } from "./config/StateScheme";
import { createReduxStore } from "./config/store";

interface StoreProvidersProps {
  children?: ReactNode;
  initialState?: Partial<StateScheme>;
}

function StoreProviders({ children, initialState }: StoreProvidersProps) {
  const store = createReduxStore(initialState as StateScheme);

  return <Provider store={store}>{children}</Provider>;
}

export default StoreProviders;
