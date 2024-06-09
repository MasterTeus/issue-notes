import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/routes";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/defaultTheme";
import { greenTheme } from "./theme/greenTheme";
import { purpeTheme } from "./theme/purpeTheme";

const manageTheme = [defaultTheme, greenTheme, purpeTheme];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={manageTheme[0]}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
