import { Story, Meta } from "@storybook/react/types-6-0";

import { FormInfoText, FormInfoTextProps } from "./FormInfoText";

export default {
  title: "Form/FormInfoText",
  component: FormInfoText,
  argTypes: {},
} as Meta;

const Template: Story<FormInfoTextProps> = (args) => (
  <FormInfoText {...args}>A info</FormInfoText>
);

export const Default = Template.bind({});
