import { Story, Meta } from "@storybook/react/types-6-0";

import { InputAddon, InputAddonProps } from "./InputAddon";

export default {
  title: "Form/InputAddon",
  component: InputAddon,
  argTypes: {},
} as Meta;

const Template: Story<InputAddonProps> = (args) => <InputAddon {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "http://",
};
