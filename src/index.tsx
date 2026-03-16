import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";
import App from "./App";
//Context Implemented here to make things accesable inside navbar and footer
import { CurrentRouteContextProvider } from "./contextAPI/CurrentRouteContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CurrentRouteContextProvider>
    <App />
  </CurrentRouteContextProvider>
);
