import React from "react";

import Button from "../button";
import SearchBar from "../searchbar";

import "./index.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div class="title">{props.name}</div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Button name="Home" />
        <Button name="Log In" />
        <Button name="Sign Up" />
      </div>
    </div>
  );
};

export default Navbar;
