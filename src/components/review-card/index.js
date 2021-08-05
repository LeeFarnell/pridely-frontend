import React from "react";
import ReviewCardComment from "../review-card-comments";

import ReactStars from "react-rating-stars-component";

import "./index.css";

const ReviewCard = (props) => {
  return (
    <div className="review-card-container">
      <div className="review-card-rating">
        <h1>Rating:4.5/5</h1>
        <div>
          <ReactStars
            count={5}
            edit={false}
            value={4.5}
            size={24}
            activeColor="#f2b5d4"
            isHalf={true}
          />
        </div>
      </div>
      <div>
        <ReviewCardComment
          username="bobSmith"
          comment="I Love This Business!!!!"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
