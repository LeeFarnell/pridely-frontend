import React from "react";

import UserCard from "./index";

export default {
  title: "Components/UserCard",
  component: UserCard,
};

export const UserCardWithProps = (args) => <UserCard {...args} />;

UserCardWithProps.args = {
  businessName: "Avatar Ang",
  businessType: "Avatar",
  location: "Air Nation",
  ratings: "5",
};
