import React from "react";
import { useUserContext } from "../../contexts/UserProvider";

import Button from "../button";
import SearchBar from "../searchbar";

import "./index.css";

const Navbar = (props) => {
  const { state, dispatch } = useUserContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("id_token");
    dispatch({ type: "LOGOUT" });
    window.location.replace("/");
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
            <Button
              name="Home"
              onClick={() => {
                window.location.replace("/");
              }}
            />
            <Button
              name="Log In"
              onClick={() => {
                window.location.replace("/login");
              }}
            />
            <Button
              name="Sign Up"
              onClick={() => {
                window.location.replace("/signup");
              }}
            />
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
            <Button
              name="Dashboard"
              onClick={() => {
                window.location.replace("/dashboard");
              }}
            />
            <Button
              name="Profile"
              value={state.user.id}
              onClick={() => {
                window.location.replace(`/user-profile/${state.user.id}`);
              }}
            />
            <Button name="Log Out" onClick={handleLogout} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
