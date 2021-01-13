import { Story, Meta } from "@storybook/react/types-6-0";
import { useState } from "react";

import { CodeEditor, CodeEditorProps } from "./CodeEditor";

export default {
  title: "Components/CodeEditor",
  component: CodeEditor,
  argTypes: {
    onChange: {
      action: "changed",
    },
    onSelection: {
      action: "selected",
    },
  },
} as Meta;

const Template: Story<CodeEditorProps> = (args) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <CodeEditor {...args} value={value} onChange={(_, v) => setValue(v)} />
  );
};

export const Python = Template.bind({});
Python.args = {
  value: `def test(hi):
  print(hi)
  `,
  language: "python",
};

export const TypeScript = Template.bind({});
TypeScript.args = {
  value: `let test: number = 20;
  `,
  language: "typescript",
};

export const SelectionEvent = Template.bind({});
SelectionEvent.args = {
  value: `let test: number = 20;
  `,
  language: "typescript",
};
