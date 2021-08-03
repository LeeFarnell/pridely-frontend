import React from "react";

import LoginForm from "./index";

export default {
  title: "Components/LoginForm",
  component: LoginForm,
};

export const LoginFormWithProps = (args) => <LoginForm {...args} />;

LoginFormWithProps.args = {};
