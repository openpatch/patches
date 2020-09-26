import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Icon, IconProps } from "./Icon";
import { Speakerphone } from "./icons/solid";
import { Announcement } from "./icons/shade";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {},
} as Meta;

const Template: Story<IconProps & { Inner: any }> = ({ Inner, ...args }) => (
  <Icon {...args}>
    <Inner />
  </Icon>
);

export const Small = Template.bind({});
Small.args = {
  size: "small",
  Inner: Speakerphone,
};
export const Large = Template.bind({});
Large.args = {
  size: "large",
  Inner: Speakerphone,
};

export const Shade = Template.bind({});
Shade.args = {
  Inner: Announcement,
};
