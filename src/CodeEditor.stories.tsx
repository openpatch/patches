import { Transaction } from "@codemirror/state";
import { Story, Meta } from "@storybook/react/types-6-0";
import { useRef } from "react";
import { Box } from "./Box";
import { ButtonPrimary } from "./ButtonPrimary";
import { CodeEditor, CodeEditorProps, CodeEditorRef } from "./CodeEditor";

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
  return <CodeEditor {...args} />;
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

export const FixedHeight = Template.bind({});
FixedHeight.args = {
  height: "200px",
  value: `let test: number = 20;
  `,
  language: "typescript",
};

export const Record: Story = () => {
  const editor = useRef<CodeEditorRef>();
  const transactions = useRef<Transaction[]>([]);

  const playback = () => {
    if (editor.current) {
      function apply(ts: Transaction[]) {
        if (ts.length > 0 && editor.current) {
          const [t, ...rest] = ts;
          if (editor.current.state !== t.startState) {
            editor.current.setState(t.startState);
          }
          editor.current.dispatch(t);
          setTimeout(() => apply(rest), 200);
        } else {
          transactions.current = [];
        }
      }
      apply(transactions.current);
    }
  };

  return (
    <Box>
      <CodeEditor
        ref={editor}
        onChange={(_, t) => transactions.current.push(...t)}
      />
      <ButtonPrimary onClick={playback}>Playback</ButtonPrimary>
    </Box>
  );
};
