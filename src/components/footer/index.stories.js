import React from "react";

import Footer from "./index";

export default {
  title: "Components/Footer",
  component: Footer,
};

export const FooterWithProps = (args) => <Footer {...args} />;

FooterWithProps.args = {
  name: "Pridely",
};
