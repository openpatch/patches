import { Meta, Story } from "@storybook/react/types-6-0";
import {
  ButtonSecondaryLink,
  ButtonSecondaryLinkProps,
} from "./ButtonSecondaryLink";

export default {
  title: "Components/ButtonSecondaryLink",
  component: ButtonSecondaryLink,
  argTypes: {},
} as Meta;

const Template: Story<ButtonSecondaryLinkProps> = (args) => (
  <ButtonSecondaryLink {...args}>A Link</ButtonSecondaryLink>
);

export const Default = Template.bind({});
Default.args = {
  href: "/",
};
