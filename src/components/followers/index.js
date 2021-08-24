import React from "react";

import Avatar from "../avatar";

import "./index.css";

const Followers = (props) => {
  return (
    <div className="followers-container">
      <div className="follower">
        <Avatar URL={props.profilePicture} />
        <div>{props.username}</div>
      </div>
    </div>
  );
};

export default Followers;
