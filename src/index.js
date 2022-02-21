import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import { ThemeProvider } from "./ThemeContexts/ThemeContext.js";
import App from "./App.jsx";
import "./index.css";

ReactDOM.render(
  <ThemeProvider>
    <SpeechProvider
      appId="be596c31-7940-4d32-835e-422b34f2747e"
      language="en-US"
    >
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
