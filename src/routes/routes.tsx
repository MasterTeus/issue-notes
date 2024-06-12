import { Route, Routes as Routers } from "react-router-dom";

import { Home } from "screens/Home/Home";
import { Post } from "screens/Post/Post";
import { template } from "tempate/template";

export const Routes = () => {
  return (
    <Routers>
      <Route path="/" element={template(<Home />)} />
      <Route path="/post" element={template(<Post />)} />
    </Routers>
  );
};
