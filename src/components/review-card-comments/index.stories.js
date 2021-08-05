import React from "react";

import ReviewCardComment from "./index";

export default {
  title: "Components/ReviewCardComment",
  component: ReviewCardComment,
};

export const ReviewCardCommentWithProps = (args) => (
  <ReviewCardComment {...args} />
);

ReviewCardCommentWithProps.args = {
  username: "bobSmith",
  comment: "i love this business!!!",
};
