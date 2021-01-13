import { Story, Meta } from "@storybook/react/types-6-0";

import { Input, InputProps } from "./Input";

export default {
  title: "Form/Input",
  component: Input,
  argTypes: {},
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  value: "Hallo",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Insert here",
};

export const Error = Template.bind({});
Error.args = {
  value: "Error",
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "Disabled",
  disabled: true,
};
