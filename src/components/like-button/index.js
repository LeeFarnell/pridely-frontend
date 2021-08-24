import React from "react";

import "./index.css";

const LikeButton = (props) => {
  return (
    <button className="like-button" onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default LikeButton;
