import React from "react";
import { useUserContext } from "../../contexts/UserProvider";

import Button from "../button";
import SearchBar from "../searchbar";

import "./index.css";

const Navbar = (props) => {
  const { state, dispatch } = useUserContext();
  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      {!state.user && <div>Navbar</div>}
      {state.user && (
        <div className="navbar">
          <div className="title">{props.name}</div>
          <div>
            <SearchBar />
          </div>
          <div>
            <Button name="Home" />
            <Button name="Log In" />
            <Button name="Sign Up" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
