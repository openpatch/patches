import { Story, Meta } from "@storybook/react/types-6-0";

import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonSecondary } from "./ButtonSecondary";
import { ButtonOutline } from "./ButtonOutline";

export default {
  title: "Components/Button Group",
  component: ButtonGroup,
  argTypes: {},
} as Meta;

const TemplatePrimary: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <ButtonPrimary>A Button</ButtonPrimary>
    <ButtonPrimary>A Button</ButtonPrimary>
    <ButtonPrimary>A Button</ButtonPrimary>
    <ButtonPrimary>A Button</ButtonPrimary>
  </ButtonGroup>
);
export const Primary = TemplatePrimary.bind({});
Primary.args = {
  attached: true,
};

export const WithSpacing = TemplatePrimary.bind({});
WithSpacing.args = {
  attached: false,
  space: "standard",
};

const TemplateSecondary: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup attached={true} {...args}>
    <ButtonSecondary>A Button</ButtonSecondary>
    <ButtonSecondary>A Button</ButtonSecondary>
    <ButtonSecondary>A Button</ButtonSecondary>
    <ButtonSecondary>A Button</ButtonSecondary>
  </ButtonGroup>
);

export const Secondary = TemplateSecondary.bind({});

const TemplateOutline: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup attached={true} {...args}>
    <ButtonOutline>A Button</ButtonOutline>
    <ButtonOutline>A Button</ButtonOutline>
    <ButtonOutline>A Button</ButtonOutline>
    <ButtonOutline>A Button</ButtonOutline>
  </ButtonGroup>
);

export const Outline = TemplateOutline.bind({});
