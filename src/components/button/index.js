import React from "react";

import "./index.css";

const Button = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Button;
