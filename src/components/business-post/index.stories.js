import React from "react";

import BusinessPost from "./index";

export default {
  title: "Components/BusinessPost",
  component: BusinessPost,
};

export const BusinessPostWithProps = (args) => <BusinessPost {...args} />;

BusinessPostWithProps.args = {};
