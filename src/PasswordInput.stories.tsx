import { Story, Meta } from "@storybook/react/types-6-0";

import { PasswordInput, PasswordInputProps } from "./PasswordInput";

export default {
  title: "Form/PasswordInput",
  component: PasswordInput,
  argTypes: {},
} as Meta;

const Template: Story<PasswordInputProps> = (args) => (
  <PasswordInput {...args} />
);

export const Default = Template.bind({});
