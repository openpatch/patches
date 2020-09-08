import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";
import { Button } from "./Button";

export default {
  title: "Components/Button Group",
  component: ButtonGroup,
  argTypes: {},
} as Meta;

const TemplatePrimary: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup attached={true} {...args}>
    <Button>A Button</Button>
    <Button>A Button</Button>
    <Button>A Button</Button>
    <Button>A Button</Button>
  </ButtonGroup>
);
export const Default = TemplatePrimary.bind({});

export const WithSpacing = TemplatePrimary.bind({});
WithSpacing.args = {
  attached: false,
  spacing: "8",
};

const TemplateSecondary: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup attached={true} {...args}>
    <Button variant="secondary">A Button</Button>
    <Button variant="secondary">A Button</Button>
    <Button variant="secondary">A Button</Button>
    <Button variant="secondary">A Button</Button>
  </ButtonGroup>
);

export const Secondary = TemplateSecondary.bind({});
