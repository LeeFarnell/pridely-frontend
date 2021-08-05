import React from "react";

import NewsFeedComment from "./index";

export default {
  title: "Components/NewsFeedComment",
  component: NewsFeedComment,
};

export const NewsFeedCommentWithProps = (args) => <NewsFeedComment {...args} />;

NewsFeedCommentWithProps.args = {
  username: "bobsmith101",
  comment: "This looks great!",
};
