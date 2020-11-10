import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Center, CenterProps } from "./Center";

export default {
  title: "Components/Center",
  component: Center,
  argTypes: {},
} as Meta;

const Template: Story<CenterProps> = (args) => <Center {...args} />;

export const Default = Template.bind({});
