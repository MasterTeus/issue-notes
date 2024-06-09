import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./src/routes/routes";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./src/theme/defaultTheme";
import { greenTheme } from "./src/theme/greenTheme";
import { purpeTheme } from "./src/theme/purpeTheme";

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
