import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { CardHeader, CardHeaderProps } from "./CardHeader";

export default {
  title: "Components/CardHeader",
  component: CardHeader,
  argTypes: {},
} as Meta;

const Template: Story<CardHeaderProps> = (args) => <CardHeader {...args} />;

export const Default = Template.bind({});
