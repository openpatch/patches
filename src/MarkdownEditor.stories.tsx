import { Story, Meta } from "@storybook/react/types-6-0";
import { MarkdownEditor, MarkdownEditorProps } from "./MarkdownEditor";

export default {
  title: "Components/MarkdownEditor",
  component: MarkdownEditor,
  argTypes: {},
} as Meta;

const Template: Story<MarkdownEditorProps> = (args) => {
  return <MarkdownEditor {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  height: "200px",
  allowPreview: true,
  value: `# Heading 1
This is a normal text.

[A Link](https://openpatch.app)

## Heading 2

- B1
- B2
- B3

### Heading 3

> A quote

#### Heading 4

\`\`\`python
def test():
  pass
\`\`\``,
};
