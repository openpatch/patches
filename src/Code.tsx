import { ReactNode } from "react";
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";

export type CodeProps = {
  children: ReactNode;
} & SyntaxHighlighterProps;

export const Code = ({ children, ...props }: CodeProps) => {
  return (
    <SyntaxHighlighter {...props}>
      {children}
    </SyntaxHighlighter>
  );
};
