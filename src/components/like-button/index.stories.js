import React from "react";

import LikeButton from "./index";

export default {
  title: "Components/LikeButton",
  component: LikeButton,
};

export const ButtonWithProps = (args) => <LikeButton {...args} />;

ButtonWithProps.args = {
  name: "Like",
};
