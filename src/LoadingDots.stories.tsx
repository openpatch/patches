import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { LoadingDots, LoadingDotsProps } from "./LoadingDots";

export default {
  title: "Components/LoadingDots",
  component: LoadingDots,
  argTypes: {},
} as Meta;

const Template: Story<LoadingDotsProps> = (args) => (
  <LoadingDots {...args}></LoadingDots>
);

export const Default = Template.bind({});

const TemplateWithText: Story<LoadingDotsProps> = (args) => (
  <LoadingDots {...args}>Loading</LoadingDots>
);

export const WithText = TemplateWithText.bind({});
