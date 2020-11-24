/** @jsx jsx */
import { ReactNode } from "react";
import { jsx } from "@emotion/react";
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export type CodeProps = {
  children: ReactNode;
} & SyntaxHighlighterProps;

export const Code = ({ children, ...props }: CodeProps) => {
  return (
    <SyntaxHighlighter style={atomDark} {...props}>
      {children}
    </SyntaxHighlighter>
  );
};
