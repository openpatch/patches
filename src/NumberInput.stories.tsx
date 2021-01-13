import { Story, Meta } from "@storybook/react/types-6-0";
import { useState } from "react";

import { NumberInput, NumberInputProps } from "./NumberInput";

export default {
  title: "Form/NumberInput",
  component: NumberInput,
  argTypes: {},
} as Meta;

const Template: Story<NumberInputProps> = (args) => {
  const [value, setValue] = useState(0);
  return <NumberInput {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
