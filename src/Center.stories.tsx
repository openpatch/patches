import { Story, Meta } from "@storybook/react/types-6-0";

import { Center, CenterProps } from "./Center";

export default {
  title: "Layout/Center",
  component: Center,
  argTypes: {},
} as Meta;

const Template: Story<CenterProps> = (args) => <Center {...args} />;

export const Default = Template.bind({});
