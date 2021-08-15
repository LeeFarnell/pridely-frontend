import React from "react";
import { useQuery } from "@apollo/client";
import { DASHBOARD_FOLLOWERS_PROFILE } from "../../queries";

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
    return <div>error</div>;
  }

  const userData = data.followerData;
  return (
    <div>
      <div>
        Name: <span>{userData.name}</span>
      </div>
      <div>
        Username: <span>{userData.username}</span>
      </div>
      <div>
        Email: <span>{userData.email}</span>
      </div>
    </div>
  );
};
export default Slide;
