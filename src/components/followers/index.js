import React from "react";
import { useHistory } from "react-router-dom";
import ChatIcon from "@material-ui/icons/Chat";

import "./index.css";

const Followers = (props) => {
  const history = useHistory();

  const sendAMessage = () => {
    history.push(`/chat/${props.followerId}`);
  };

  return (
    <div className="scrollable-list">
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
        <div className="chat-icon">
          <ChatIcon name="Message" onClick={() => sendAMessage()} />
        </div>
      </div>
    </div>
  );
};

export default Followers;
