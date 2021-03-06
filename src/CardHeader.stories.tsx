import { Story, Meta } from "@storybook/react/types-6-0";

import { CardHeader, CardHeaderProps } from "./CardHeader";

export default {
  title: "Components/CardHeader",
  component: CardHeader,
  argTypes: {},
} as Meta;

const Template: Story<CardHeaderProps> = (args) => (
  <CardHeader {...args}>Card Header</CardHeader>
);

export const Default = Template.bind({});
