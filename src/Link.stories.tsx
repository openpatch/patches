import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Link, LinkProps } from "./Link";

export default {
  title: "Typography/Link",
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
