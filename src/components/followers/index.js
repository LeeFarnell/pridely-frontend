import React from "react";
import { useHistory } from "react-router-dom";

import Avatar from "../avatar";
import Button from "../button";

import "./index.css";

const Followers = (props) => {
  const history = useHistory();

  const sendAMessage = () => {
    history.push(`/chat/${props.followerId}`);
  };

  return (
    <div className="followers-container">
      <div className="follower">
        <div>
          <img
            src={props.profilePicture}
            className="follower-img"
            alt={`avatar of ${props.username}`}
          />
        </div>
      </div>
      <h3>{props.username}</h3>
      <Button name="Message" onClick={() => sendAMessage()} />
    </div>
  );
};

export default Followers;
