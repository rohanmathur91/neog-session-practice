import React from "react";
import ReactDOM from "react-dom";
import setupMockServer from "./api/mock.server";

import App from "./App";

setupMockServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
