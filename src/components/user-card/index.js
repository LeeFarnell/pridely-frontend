import React from "react";
import { Link } from "react-router-dom";

import { useUserContext } from "../../contexts/UserProvider";
import { truncateString } from "../../utils/utilities";
import Avatar from "../avatar";
import Button from "../button";
import FollowButton from "../follow-button";

import "./index.css";

const UserCard = ({ result }) => {
  const { state } = useUserContext();

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
      <div className="user-card-bottom">Rating: {result.averageRating}</div>
      <Link to={`/user-profile/${result.id}`}>
        <Button name="View Profile" />
      </Link>
      {state.user.id !== result.id && (
        <FollowButton name="Follow" userId={result.id} />
      )}
    </div>
  );
};

export default UserCard;
