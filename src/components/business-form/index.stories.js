import React from "react";

import BusinessForm from "./index";

export default {
  title: "Components/BusinessForm",
  component: BusinessForm,
};

export const BusinessFormWithProps = (args) => <BusinessForm {...args} />;

BusinessFormWithProps.args = {};
