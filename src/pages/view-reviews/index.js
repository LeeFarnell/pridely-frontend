import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import LoadingSpinner from "../../components/loading";
import ReviewCard from "../../components/review-card";
import { GET_REVIEWS } from "../../queries";
import ErrorMessage from "../../components/error-message";

import "./index.css";

const ViewReviews = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_REVIEWS, {
    variables: { getReviewsUserId: id },
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage returnTo={"/"} />;
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
