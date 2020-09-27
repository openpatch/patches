import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Card, CardProps } from "./Card";
import { CardContent } from "./CardContent";
import { CardFooter } from "./CardFooter";
import { CardMedia } from "./CardMedia";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
} as Meta;

const Template: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardMedia
      height="100px"
      image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
    ></CardMedia>
    <CardContent>This is a card</CardContent>
    <CardFooter>A footer</CardFooter>
  </Card>
);

export const Default = Template.bind({});
