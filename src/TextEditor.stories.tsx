import { Story, Meta } from "@storybook/react/types-6-0";

import { TextEditor, TextEditorProps } from "./TextEditor";

export default {
  title: "Components/TextEditor",
  component: TextEditor,
  argTypes: {},
} as Meta;

const Template: Story<TextEditorProps> = (args) => <TextEditor {...args} />;

export const Default = Template.bind({});
