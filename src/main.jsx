import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Global } from "@emotion/react";
import { global, reset } from "./styles/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <App />
  </React.StrictMode>
);
