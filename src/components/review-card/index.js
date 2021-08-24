import React from "react";
import ReviewCardComment from "../review-card-comments";
import ReactStars from "react-rating-stars-component";

import "./index.css";

const ReviewCard = (props) => {
  return (
    <div className="review-card-container">
      <div className="review-card-rating">
        <h3>Rating:{props.rating}/5</h3>
        <div>
          <ReactStars
            count={5}
            edit={false}
            value={props.rating}
            size={25}
            activeColor="#f2b5d4"
            isHalf={true}
          />
        </div>
      </div>
      <div>
        <ReviewCardComment username={props.writtenBy} comment={props.comment} />
      </div>
    </div>
  );
};

export default ReviewCard;
