import { Story, Meta } from "@storybook/react/types-6-0";

import { FormHeader, FormHeaderProps } from "./FormHeader";

export default {
  title: "Form/FormHeader",
  component: FormHeader,
  argTypes: {},
} as Meta;

const Template: Story<FormHeaderProps> = (args) => (
  <FormHeader {...args}>Form Header</FormHeader>
);

export const Default = Template.bind({});
