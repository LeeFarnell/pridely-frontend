import Button from "../button";
import React from "react";

import "./index.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div class="title">{props.name}</div>
      <Button name="Home" />
      <Button name="Log In" />
      <Button name="Sign Up" />
    </div>
  );
};

export default Navbar;
