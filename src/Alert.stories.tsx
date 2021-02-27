import { Story, Meta } from "@storybook/react/types-6-0";

import { Alert, AlertProps } from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {},
} as Meta;

const Template: Story<AlertProps> = (args) => (
  <Alert {...args}>This is an alert!</Alert>
);

export const Default = Template.bind({});
