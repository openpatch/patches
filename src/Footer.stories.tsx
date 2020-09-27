import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Footer, FooterProps } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {},
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  copyright: "OpenPatch",
  links: [
    {
      label: "Docs",
      href: "#",
    },
    {
      label: "Pricing",
      href: "#",
    },
    {
      label: "Contact",
      href: "#",
    },
  ],
};
