import React from "react";

import "./index.css";

const ReviewCardComment = (props) => {
  return (
    <div className="review-card-comments">
      <div className="username">{props.username} said:</div>
      <div className="comment">{props.comment}</div>
    </div>
  );
};

export default ReviewCardComment;
