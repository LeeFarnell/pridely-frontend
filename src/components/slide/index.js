import React from "react";
import { useQuery } from "@apollo/client";
import { DASHBOARD_FOLLOWERS_PROFILE } from "../../queries";

const Slide = (props) => {
  const { myFollowers } = props;
  console.log(myFollowers);

  const { data, error, loading } = useQuery(DASHBOARD_FOLLOWERS_PROFILE);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  const userData = data.user;
  console.log(userData);
  return <div>{}</div>;
};
export default Slide;
