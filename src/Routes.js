import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Search from "./pages/search";
import Signup from "./pages/signup";
import BusinessForm from "./components/business-form";
import UserProfile from "./pages/user";
import Chat from "./pages/chat";
import { useUserContext } from "./contexts/UserProvider";
import CreatePost from "./pages/create-post";
import ViewReviews from "./pages/view-reviews";

const Routes = () => {
  const { state } = useUserContext();

  return (
    <Switch>
      <Route exact path="/login">
        {!state.user ? <Login /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/signup">
        {!state.user ? <Signup /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/business-signup">
        <BusinessForm />
      </Route>
      <Route exact path={`/user-profile/:id`}>
        <UserProfile />
      </Route>
      <Route exact path="/dashboard">
        {state.user ? <Dashboard /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/chat/:id">
        {state.user ? <Chat /> : <Redirect to="/login" />}
      </Route>
      <Route exact path={`/create-post/:id`}>
        {state.user ? <CreatePost /> : <Redirect to="/login" />}
      </Route>
      <Route exact path={`/reviews/:id`}>
        {state.user ? <ViewReviews /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  );
};

export default Routes;
