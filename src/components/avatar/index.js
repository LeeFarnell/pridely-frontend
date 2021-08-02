import React from "react";

import "./index.css";

const Avatar = (props) => {
  return (
    <div>
      <img src={props.URL} className="avatar-img" />
    </div>
  );
};

export default Avatar;
