import React from "react";

import ReviewCard from "./index";

export default {
  title: "Components/ReviewCard",
  component: ReviewCard,
};

export const ReviewCardWithProps = (args) => <ReviewCard {...args} />;

ReviewCardWithProps.args = {
  name: "Pridely",
};
