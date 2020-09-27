import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Typography/Heading",
  component: Heading,
  argTypes: {},
} as Meta;

const Template: Story<HeadingProps> = (args) => (
  <Heading {...args}>A very long heading over two lines</Heading>
);

export const Default = Template.bind({});
