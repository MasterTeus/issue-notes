import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./src/screens/Home/Home.tsx";
import { Profile } from "./src/screens/Profile/Profile.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
    <Profile />
  </React.StrictMode>
);
