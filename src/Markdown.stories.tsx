import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Markdown, MarkdownProps } from "./Markdown";
import { Card } from "./Card";
import { CardContent } from "./CardContent";

export default {
  title: "Components/Markdown",
  component: Markdown,
  argTypes: {},
} as Meta;

const Template: Story<MarkdownProps> = (args) => (
  <Card>
    <CardContent>
      <Markdown {...args} />
    </CardContent>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  markdown: `
  # Test

  > Quote

 \`\`\`java
  class Car {
    public static void main(String[] args) {
      int value = 0;
      System.out.println(value);
    }
  }
 \`\`\` 

 | Hi | Table |
 |:-|:-|
 | hu | row   |
  `,
};
