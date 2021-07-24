import React from "react";

import Button from "./index";

export default {
  title: "Components/Button",
  component: Button,
};

export const ButtonWithProps = (args) => <Button {...args} />;

ButtonWithProps.args = {
  name: "Sign Up",
};
