import React from "react";

import Avatar from "../avatar";

import "./index.css";

const Followers = (props) => {
  return (
    <div className="followers-container">
      <div className="follower">
        <Avatar URL="https://filmschoolrejects.com/wp-content/uploads/2018/10/avatar-last-airbender-episodes-ranked.jpg" />
        <div>{props.username}</div>
      </div>
    </div>
  );
};

export default Followers;
