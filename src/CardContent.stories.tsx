import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { CardContent, CardContentProps } from "./CardContent";

export default {
  title: "Components/CardContent",
  component: CardContent,
  argTypes: {},
} as Meta;

const Template: Story<CardContentProps> = (args) => (
  <CardContent {...args}>Content</CardContent>
);

export const Default = Template.bind({});
