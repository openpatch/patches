import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Flex, FlexProps } from "./Flex";

export default {
  title: "Layout/Flex",
  component: Flex,
  argTypes: {},
} as Meta;

const Template: Story<FlexProps> = (args) => <Flex {...args} />;

export const Default = Template.bind({});
