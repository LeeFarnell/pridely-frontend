import React from "react";

import Avatar from "../avatar";

import Button from "../button";

import "./index.css";

const UserCard = (props) => {
  return (
    <div className="user-card-container">
      <div>
        <Avatar URL="https://filmschoolrejects.com/wp-content/uploads/2018/10/avatar-last-airbender-episodes-ranked.jpg" />
      </div>
      <div className="user-card-info">{props.businessName}</div>
      <div className="user-card-info">{props.businessType}</div>
      <div className="user-card-info">{props.location}</div>
      <div className="user-card-bottom">Rating: {props.ratings}</div>
      <Button name="View Profile" />
    </div>
  );
};

export default UserCard;
