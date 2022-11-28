import React from "react";

import UserProfile from "../side-nav/UserProfile";
import Image from "../assets/images/user-1.jpeg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "User Profile",
  component: UserProfile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <UserProfile {...args} />;

export const UserProfileComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UserProfileComponent.args = {
  name: "Nowak Helme",
  designation: "Admin head",
  image: Image,
};
