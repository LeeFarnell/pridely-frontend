import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../avatar";

import Button from "../button";
import FollowButton from "../follow-button";

import "./index.css";

const UserCard = ({ result }) => {
  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="user-card-container">
      <div>
        <Avatar URL={`${result.profilePicture}`} />
      </div>
      <div className="user-card-info">{result.businessName}</div>
      <div className="user-card-info">Category: {result.businessType}</div>
      <div className="user-card-info">
        {truncateString(result.businessDescription, 100)}
      </div>
      <div className="user-card-info">
        {result.region}, {result.country}
      </div>
      <div className="user-card-bottom">Rating: {result.ratings}</div>
      <Link to={`/user-profile/${result.id}`}>
        <Button name="View Profile" />
      </Link>
      <FollowButton name="Follow" userId={result.id}/>
    </div>
  );
};

export default UserCard;
