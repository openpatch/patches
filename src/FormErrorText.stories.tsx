import { Story, Meta } from "@storybook/react/types-6-0";

import { FormErrorText, FormErrorTextProps } from "./FormErrorText";

export default {
  title: "Form/FormErrorText",
  component: FormErrorText,
  argTypes: {},
} as Meta;

const Template: Story<FormErrorTextProps> = (args) => (
  <FormErrorText {...args} />
);

export const Default = Template.bind({});
