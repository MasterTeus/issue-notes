import { Route, Routes as Routers } from "react-router-dom";
import { Home } from "../screens/Home/Home";

import { Post } from "../screens/Post/Post";

export const Routes = () => {
  return (
    <Routers>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
    </Routers>
  );
};
