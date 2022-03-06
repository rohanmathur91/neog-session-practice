import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CounterProvider } from "./counter-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>,
  rootElement
);
