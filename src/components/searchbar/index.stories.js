import React from "react";

import SearchBar from "./index";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
};

export const SearchBarWithProps = (args) => <SearchBar {...args} />;

SearchBarWithProps.args = {
  name: "Pridely",
};
