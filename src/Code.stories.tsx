import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Code, CodeProps } from "./Code";

export default {
  title: "Typography/Code",
  component: Code,
  argTypes: {},
} as Meta;

const Template: Story<CodeProps> = (args) => (
  <Code {...args}>
    {`import { ReactNode, forwardRef, Ref } from "react";
import { jsx, css } from "@emotion/core";
import { TextProps, textStyle } from "./Text";

export type CodeProps = {
  children?: ReactNode;
  ref?: Ref<HTMLDivElement>;
} & TextProps;

export const Code = forwardRef(
  ({ children, ...props }: CodeProps, ref: CodeProps["ref"]) => {
    return (
      <code ref={ref} css={(theme) => [textStyle(theme)(props)]} {...props}>
        {children}
      </code>
    );
  }
);`}
  </Code>
);

export const Default = Template.bind({});
Default.args = {
  language: "typescript",
};
