import { Story, Meta } from "@storybook/react/types-6-0";

import { ArrowUp } from "./icons/solid";
import { Badge, BadgeProps } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {},
} as Meta;

const Template: Story<BadgeProps> = (args) => (
  <Badge {...args}>This is a badge</Badge>
);

export const Default = Template.bind({});

export const withIcon = Template.bind({});
withIcon.args = {
  icon: <ArrowUp />,
};
