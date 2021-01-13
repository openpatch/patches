import { Story, Meta } from "@storybook/react/types-6-0";

import { FormHelperText, FormHelperTextProps } from "./FormHelperText";

export default {
  title: "Form/FormHelperText",
  component: FormHelperText,
  argTypes: {},
} as Meta;

const Template: Story<FormHelperTextProps> = (args) => (
  <FormHelperText {...args} />
);

export const Default = Template.bind({});
