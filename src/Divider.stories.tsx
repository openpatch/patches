import { Story, Meta } from "@storybook/react/types-6-0";

import { Divider, DividerProps } from "./Divider";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {},
} as Meta;

const Template: Story<DividerProps> = (args) => (
  <div>
    <Divider {...args} />
  </div>
);

export const Default = Template.bind({});
