import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import ReviewCard from "../../components/review-card";
import { GET_REVIEWS } from "../../queries";

const ViewReviews = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_REVIEWS, {
    variables: { getReviewsUserId: id },
  });

  if (error) {
    return <div>error</div>;
  }

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      {data.getReviews.map((review) => {
        console.log(review);
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
  );
};

export default ViewReviews;
