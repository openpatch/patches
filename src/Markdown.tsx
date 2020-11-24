/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Blockquote } from "./Blockquote";
import { Code } from "./Code";
import { Table } from "./Table";
import { TableBody } from "./TableBody";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { TableHead } from "./TableHead";

export type MarkdownProps = {
  markdown: string;
};

type CodeBlockProps = {
  value: string;
  language: string;
};

const CodeBlock = ({ value, language }: CodeBlockProps) => (
  <Code language={language}>{value}</Code>
);

export const Markdown = ({ markdown }: MarkdownProps) => {
  return (
    <ReactMarkdown
      plugins={[gfm]}
      renderers={{
        code: CodeBlock,
        blockquote: Blockquote,
        table: Table,
        tableHead: TableHead,
        tableBody: TableBody,
        tableRow: TableRow,
        tableCell: TableCell,
      }}
      source={markdown}
    />
  );
};
