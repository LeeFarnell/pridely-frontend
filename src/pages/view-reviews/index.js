import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import CircularIndeterminate from "../../components/loading";
import ReviewCard from "../../components/review-card";
import { GET_REVIEWS } from "../../queries";

import "./index.css";

const ViewReviews = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_REVIEWS, {
    variables: { getReviewsUserId: id },
  });

  if (error) {
    return <div>error</div>;
  }

  if (loading) {
    return (
      <div className="dashboard-container">
        <CircularIndeterminate />
      </div>
    );
  }

  return (
    <div className="reviews-page-container">
      <h1>Reviews</h1>
      <div className="review-page-cards">
        {data.getReviews.map((review) => {
          return (
            <ReviewCard
              comment={review.commentBox}
              serviceUsed={review.serviceUsed}
              rating={review.rating}
              writtenBy={review.username.username}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ViewReviews;
