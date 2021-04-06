import { Meta, Story } from "@storybook/react/types-6-0";
import { ButtonPrimaryLink, ButtonPrimaryLinkProps } from "./ButtonPrimaryLink";

export default {
  title: "Components/ButtonPrimaryLink",
  component: ButtonPrimaryLink,
  argTypes: {},
} as Meta;

const Template: Story<ButtonPrimaryLinkProps> = (args) => (
  <ButtonPrimaryLink {...args}>A Link</ButtonPrimaryLink>
);

export const Default = Template.bind({});
Default.args = {
  href: "/",
};
