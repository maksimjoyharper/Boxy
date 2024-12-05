import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import StoreProviders from "./provider/StoreProvider/StoreProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProviders>
  </StrictMode>
);
