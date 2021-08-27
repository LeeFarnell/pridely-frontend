import React from "react";

import "./index.css";

// avatar component
const Avatar = (props) => {
  return (
    <div>
      <img src={props.URL} className="avatar-img" alt={props.alt} />
    </div>
  );
};

export default Avatar;
