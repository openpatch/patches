import { Story, Meta } from "@storybook/react/types-6-0";
import { useState } from "react";

import { RadioGroup, RadioGroupProps } from "./RadioGroup";

export default {
  title: "Form/RadioGroup",
  component: RadioGroup,
  argTypes: {},
} as Meta;

const Template: Story<RadioGroupProps> = (args) => {
  const [value, setValue] = useState(null);
  return <RadioGroup {...args} value={value} onChange={(v) => setValue(v)} />;
};

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      value: "one",
      label: "One",
      helperText: "This is a helper text",
    },
    {
      value: "two",
      label: "Two",
    },
    {
      value: "three",
      label: "Three",
    },
  ],
};

const TemplateWithoutState: Story<RadioGroupProps> = (args) => {
  return <RadioGroup {...args} />;
};

export const Disabled = TemplateWithoutState.bind({});
Disabled.args = {
  value: "one",
  disabled: true,
  options: [
    {
      value: "one",
      label: "One",
      helperText: "This is a helper text",
    },
    {
      value: "two",
      label: "Two",
    },
    {
      value: "three",
      label: "Three",
    },
  ],
};
