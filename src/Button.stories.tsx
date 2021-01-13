import { Story, Meta } from "@storybook/react/types-6-0";

import * as icons from "./icons/solid";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
  },
} as Meta;

const Template: Story<ButtonProps> = ({ ...args }) => {
  return <Button children="A Button" {...args} />;
};

export const XSmall = Template.bind({});
XSmall.args = {
  size: "xsmall",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const ResponsiveSize = Template.bind({});
ResponsiveSize.args = {
  size: ["xsmall", "large"],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  iconLeft: <icons.AcademicCap />,
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  iconRight: <icons.AcademicCap />,
};
