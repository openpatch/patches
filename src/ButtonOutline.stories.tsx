import { Story, Meta } from "@storybook/react/types-6-0";

import { ButtonOutline, ButtonOutlineProps } from "./ButtonOutline";

export default {
  title: "Components/ButtonOutline",
  component: ButtonOutline,
  argTypes: {},
} as Meta;

const Template: Story<ButtonOutlineProps> = (args) => (
  <ButtonOutline {...args}>Outline</ButtonOutline>
);

export const Default = Template.bind({});
