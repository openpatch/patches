import { Meta, Story } from "@storybook/react/types-6-0";
import { Link, LinkProps } from "./Link";

export default {
  title: "Typography/Link (deprecated)",
  component: Link,
  argTypes: {},
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <Link href="#" {...args}>
    A link
  </Link>
);

export const Default = Template.bind({});

export const External = Template.bind({});
External.args = {
  external: true,
};

export const CustomAs = Template.bind({});
CustomAs.args = {
  as: (props) => <span {...props}></span>,
};
