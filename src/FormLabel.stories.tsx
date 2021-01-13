import { Story, Meta } from "@storybook/react/types-6-0";

import { FormLabel, FormLabelProps } from "./FormLabel";

export default {
  title: "Form/FormLabel",
  component: FormLabel,
  argTypes: {},
} as Meta;

const Template: Story<FormLabelProps> = (args) => <FormLabel {...args} />;

export const Default = Template.bind({});
