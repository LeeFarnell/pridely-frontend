import React from "react";

import Avatar from "./index";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

export const AvatarWithProps = (args) => <Avatar {...args} />;

AvatarWithProps.args = {
  URL: "https://pbs.twimg.com/profile_images/1290710495465541633/BhrDfujl_400x400.jpg",
};
