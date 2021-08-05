import React from "react";

import SimpleModal from "./index";

export default {
  title: "Components/SimpleModal",
  component: SimpleModal,
};

export const SimpleModalWithProps = (args) => <SimpleModal {...args} />;

SimpleModalWithProps.args = {};
