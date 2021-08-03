import React from "react";

import SignUpForm from "./index";

export default {
  title: "Components/SignUpForm",
  component: SignUpForm,
};

export const SignUpFormWithProps = (args) => <SignUpForm {...args} />;

SignUpFormWithProps.args = {};
