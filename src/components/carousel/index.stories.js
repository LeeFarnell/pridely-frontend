import React from "react";

import Carousel from "./index";

export default {
  title: "Components/Carousel",
  component: Carousel,
};

export const CarouselWithProps = (args) => <Carousel {...args} />;

CarouselWithProps.args = {
  name: "Sign Up",
};
