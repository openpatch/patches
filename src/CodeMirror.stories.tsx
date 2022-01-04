
import { Story, Meta } from "@storybook/react/types-6-0";

import { CodeMirror, CodeMirrorProps } from "./CodeMirror";

export default {
  title: "Components/CodeMirror",
  component: CodeMirror,
  argTypes: {},
} as Meta;

const Template: Story<CodeMirrorProps> = (args) => <CodeMirror {...args} />;

export const Default = Template.bind({});