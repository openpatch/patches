import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import * as icons from "./icons/solid";
import { Flex } from "./Flex";
import { Spacer } from "./Spacer";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
  },
} as Meta;

const Template: Story<ButtonProps> = ({ ...args }) => {
  return (
    <Flex>
      <Button children="A Button" {...args} />
      <Spacer width={50} />
      <Button children="A Button" {...args} variant="primary" />
      <Spacer width={50} />
      <Button children="A Button" {...args} variant="inverted" />
      <Spacer width={50} />
      <Button children="A Button" {...args} variant="secondary" />
      <Spacer width={50} />
      <Button children="A Button" {...args} variant="tertiary" />
    </Flex>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Neutral = Template.bind({});
Neutral.args = {
  color: "neutral",
};

export const Success = Template.bind({});
Success.args = {
  color: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
};

export const Error = Template.bind({});
Error.args = {
  color: "error",
};

export const Info = Template.bind({});
Info.args = {
  color: "info",
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  iconLeft: <icons.AcademicCap />,
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  iconRight: <icons.AcademicCap />,
};
