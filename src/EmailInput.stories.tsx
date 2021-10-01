import { Meta, Story } from "@storybook/react/types-6-0";
import { EmailInput, EmailInputProps } from "./EmailInput";

export default {
  title: "Form/EmailInput",
  component: EmailInput,
  argTypes: {},
} as Meta;

const Template: Story<EmailInputProps> = (args) => <EmailInput {...args} />;

export const Default = Template.bind({});
