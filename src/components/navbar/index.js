import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserProvider";
import { useHistory } from "react-router-dom";

import Button from "../button";
import SearchBar from "../searchbar";

import "./index.css";

const Navbar = (props) => {
  const { state, dispatch } = useUserContext();

  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("id_token");
    dispatch({ type: "LOGOUT" });
    history.push(`/`);
  };

  return (
    <div>
      {!state.user && (
        <div className="navbar">
          <div className="title">{props.name}</div>
          <div>
            <SearchBar />
          </div>
          <div>
            <Link to="/">
              <Button name="Home" />
            </Link>
            <Link to="/login">
              <Button name="Log In" />
            </Link>
            <Link to="/signup">
              <Button name="Sign Up" />
            </Link>
          </div>
        </div>
      )}
      {state.user && (
        <div className="navbar">
          <div className="title">{props.name}</div>
          <div>
            <SearchBar />
          </div>
          <div>
            <Link to="/dashboard">
              <Button name="Dashboard" />
            </Link>
            <Link to={`/user-profile/${state.user.id}`}>
              <Button name="Profile" value={state.user.id} />
            </Link>
            <Button name="Log Out" onClick={handleLogout} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
