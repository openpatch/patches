import { Meta, Story } from "@storybook/react/types-6-0";
import { ButtonOutlineLink, ButtonOutlineLinkProps } from "./ButtonOutlineLink";

export default {
  title: "Components/ButtonOutlineLink",
  component: ButtonOutlineLink,
  argTypes: {},
} as Meta;

const Template: Story<ButtonOutlineLinkProps> = (args) => (
  <ButtonOutlineLink {...args}>A Link</ButtonOutlineLink>
);

export const Default = Template.bind({
  href: "/",
});
Default.args = {
  href: "/",
};
