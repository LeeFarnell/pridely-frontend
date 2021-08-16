import React from "react";
import { useQuery } from "@apollo/client";

import Avatar from "../avatar";
import Button from "../button";
import { DASHBOARD_FOLLOWERS_PROFILE } from "../../queries";

import "./index.css";

const Slide = (props) => {
  // destructure follower id from props
  const { myFollowers } = props;

  // making a query for current follower id from props
  const { data, error, loading } = useQuery(DASHBOARD_FOLLOWERS_PROFILE, {
    variables: { followerDataFollowerId: myFollowers },
  });

  // if loading render this
  if (loading) {
    return <div>loading</div>;
  }

  // if error render this
  if (error) {
    return <div>peter</div>;
  }

  const userData = data.followerData;
  // const userData = null;

  return (
    <div className="user-card-container">
      <div>
        <Avatar URL="https://filmschoolrejects.com/wp-content/uploads/2018/10/avatar-last-airbender-episodes-ranked.jpg" />
      </div>
      <div className="user-card-info">{userData.name}</div>
      <div className="user-card-info">{userData.username}</div>
      <div className="user-card-info">{userData.email}</div>
      <div className="user-card-bottom">Rating: {userData.email}</div>
      <Button name="View Profile" />
    </div>
  );
};
export default Slide;
