import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Avatar, AvatarProps } from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {},
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: ["small", "large"],
  src:
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Avatar_user_color.png",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  src:
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Avatar_user_color.png",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  src:
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Avatar_user_color.png",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  src:
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Avatar_user_color.png",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: true,
};
