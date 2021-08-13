import { Meta, Story } from "@storybook/react/types-6-0";
import { HeadingLink, HeadingLinkProps } from "./HeadingLink";

export default {
  title: "Typography/HeadingLink",
  component: HeadingLink,
  argTypes: {},
} as Meta;

const Template: Story<HeadingLinkProps> = (args) => (
  <HeadingLink {...args}>A Link</HeadingLink>
);

export const Default = Template.bind({});
Default.args = {
  href: "#",
};

export const External = Template.bind({});
External.args = {
  href: "https://openpatch.app",
};
