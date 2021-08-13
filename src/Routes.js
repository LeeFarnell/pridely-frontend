import { Switch, Route, Redirect } from "react-router-dom";

import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Search from "./pages/search";
import Signup from "./pages/signup";
import BusinessForm from "./components/business-form";
import UserProfile from "./pages/user";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/business-signup">
        <BusinessForm />
      </Route>
      <Route exact path="/user-profile">
        <UserProfile />
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  );
};

export default Routes;
