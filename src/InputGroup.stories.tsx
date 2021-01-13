import { Story, Meta } from "@storybook/react/types-6-0";
import { InputAddon } from "./InputAddon";
import { Input } from "./Input";
import { InputGroup, InputGroupProps } from "./InputGroup";

export default {
  title: "Form/InputGroup",
  component: InputGroup,
  argTypes: {},
} as Meta;

const Template: Story<InputGroupProps> = (args) => (
  <InputGroup addonLeft="https://" addonRight=".com">
    <Input />
  </InputGroup>
);

export const Default = Template.bind({});
