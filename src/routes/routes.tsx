import { Route, Routes as Routers } from "react-router-dom";
import { Home } from "../screens/Home/Home";
import { Profile } from "../screens/Profile/Profile";

export const Routes = () => {
  return (
    <Routers>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routers>
  );
};
