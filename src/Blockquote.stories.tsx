import { Story, Meta } from "@storybook/react/types-6-0";

import { Blockquote, BlockquoteProps } from "./Blockquote";

export default {
  title: "Typography/Blockquote",
  component: Blockquote,
  argTypes: {},
} as Meta;

const Template: Story<BlockquoteProps> = (args) => (
  <Blockquote {...args}>This is a Blockquote</Blockquote>
);

export const Default = Template.bind({});
