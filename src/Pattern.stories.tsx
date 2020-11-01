import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Pattern, PatternProps } from "./Pattern";

export default {
  title: "Components/Pattern",
  component: Pattern,
  argTypes: {},
} as Meta;

const Template: Story<PatternProps> = (args) => <Pattern {...args} />;

export const Default = Template.bind({});
