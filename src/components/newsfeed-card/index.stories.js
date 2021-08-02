import React from "react";

import NewsFeedCard from "./index";

export default {
  title: "Components/NewsFeedCard",
  component: NewsFeedCard,
};

export const NewsFeedCardWithProps = (args) => <NewsFeedCard {...args} />;

NewsFeedCardWithProps.args = {
  title: "Hello",
  body: "Welcome to my first post!",
  likes: "5",
};
