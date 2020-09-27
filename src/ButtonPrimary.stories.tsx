import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Archive } from "./icons/outline";
import { ButtonPrimary, ButtonPrimaryProps } from "./ButtonPrimary";

export default {
  title: "Components/ButtonPrimary",
  component: ButtonPrimary,
  argTypes: {},
} as Meta;

const Template: Story<ButtonPrimaryProps> = (args) => (
  <ButtonPrimary {...args}>Primary Button</ButtonPrimary>
);

export const Default = Template.bind({});

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  iconLeft: <Archive />,
};
