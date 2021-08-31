import React from "react";
import { Link } from "react-router-dom";

import { truncateString } from "../../utils/utilities";
import Avatar from "../avatar";
import Button from "../button";
import FollowButton from "../follow-button";

import "./index.css";

const UserCard = ({ result, isFollowing, refetch }) => {
  return (
    <div className="user-card-container">
      <div>
        <Avatar
          URL={`${result.profilePicture}`}
          alt={`avatar image of ${result.businessName}`}
        />
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
      {isFollowing === -1 ? (
        <FollowButton name="Follow" userId={result.id} refetch={refetch} />
      ) : (
        <div>Already Following</div>
      )}
    </div>
  );
};

export default UserCard;
