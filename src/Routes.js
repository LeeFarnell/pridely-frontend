import { Switch, Route, Redirect } from "react-router-dom";

import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Search from "./pages/search";
import Signup from "./pages/signup";
import UserProfile from "./pages/user";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/user-profile">
        <UserProfile />
      </Route>
    </Switch>
  );
};

export default Routes;
