import { Story, Meta } from "@storybook/react/types-6-0";

import { FormSuccessText, FormSuccessTextProps } from "./FormSuccessText";

export default {
  title: "Form/FormSuccessText",
  component: FormSuccessText,
  argTypes: {},
} as Meta;

const Template: Story<FormSuccessTextProps> = (args) => (
  <FormSuccessText {...args}>Success</FormSuccessText>
);

export const Default = Template.bind({});
