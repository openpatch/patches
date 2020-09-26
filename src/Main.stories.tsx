import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Main, MainProps } from "./Main";

export default {
  title: "Components/Main",
  component: Main,
  argTypes: {},
} as Meta;

const Template: Story<MainProps> = (args) => <Main {...args} />;

export const Default = Template.bind({});
