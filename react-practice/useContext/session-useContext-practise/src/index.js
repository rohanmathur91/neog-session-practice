import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./cart-context";

import App from "./App";
import { ThemeProvider } from "./theme-context";
import { LocalisationProvider } from "./language-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LocalisationProvider>
      <ThemeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </LocalisationProvider>
  </StrictMode>,
  rootElement
);
