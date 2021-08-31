import { useMutation } from "@apollo/client";
import React from "react";
import { FOLLOW_USER } from "../../mutations";

import "./index.css";

const FollowButton = (props) => {
  const [followUser] = useMutation(FOLLOW_USER, {
    onCompleted: () => {
      props.refetch();
    },
    onError: () => {
      throw new Error("Something went wrong!");
    },
  });

  const onClickFollowUser = async () => {
    try {
      await followUser({
        variables: {
          followUserUserId: props.userId,
        },
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <button className="button" onClick={onClickFollowUser}>
      {props.name}
    </button>
  );
};

export default FollowButton;
