import { Story, Meta } from "@storybook/react/types-6-0";

import { FormFooter, FormFooterProps } from "./FormFooter";

export default {
  title: "Form/FormFooter",
  component: FormFooter,
  argTypes: {},
} as Meta;

const Template: Story<FormFooterProps> = (args) => <FormFooter {...args} />;

export const Default = Template.bind({});
