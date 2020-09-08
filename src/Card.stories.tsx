import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Card, CardProps, CardContent } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
} as Meta;

const Template: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardContent>This is a card</CardContent>
  </Card>
);

export const Default = Template.bind({});
