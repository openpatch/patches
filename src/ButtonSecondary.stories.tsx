import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ButtonSecondary, ButtonSecondaryProps } from "./ButtonSecondary";

export default {
  title: "Components/ButtonSecondary",
  component: ButtonSecondary,
  argTypes: {},
} as Meta;

const Template: Story<ButtonSecondaryProps> = (args) => (
  <ButtonSecondary {...args}>Secondary</ButtonSecondary>
);

export const Default = Template.bind({});
