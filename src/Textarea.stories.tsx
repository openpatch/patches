import { Story, Meta } from "@storybook/react/types-6-0";

import { Textarea, TextareaProps } from "./Textarea";

export default {
  title: "Form/Textarea",
  component: Textarea,
  argTypes: {},
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
