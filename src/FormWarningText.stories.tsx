import { Story, Meta } from "@storybook/react/types-6-0";

import { FormWarningText, FormWarningTextProps } from "./FormWarningText";

export default {
  title: "Form/FormWarningText",
  component: FormWarningText,
  argTypes: {},
} as Meta;

const Template: Story<FormWarningTextProps> = (args) => (
  <FormWarningText {...args}>Warning</FormWarningText>
);

export const Default = Template.bind({});
