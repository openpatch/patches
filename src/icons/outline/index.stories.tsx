import { Meta, Story } from "@storybook/react/types-6-0";
import * as icons from ".";
import { Icons } from "../../../.storybook/components/Icons";
import { Icon, IconProps } from "../../Icon";

export default {
  title: "Icons/Outline",
  component: Icon,
  argTypes: {},
} as Meta;

const Template: Story<IconProps> = (args) => <Icons icons={icons} {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Auto = Template.bind({});
Auto.args = {
  size: "auto",
};
