import ReactMarkdown, { Components } from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import { Blockquote } from "./Blockquote";
import { Code } from "./Code";
import { TextLink } from "./TextLink";
import { Table } from "./Table";
import { TableBody } from "./TableBody";
import { TableCell } from "./TableCell";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";

export type MarkdownProps = {
  markdown: string;
  allowHtml?: boolean;
};

const CodeBlock: Components["code"] = ({ inline, className, children }) => {
  console.log(className);
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <Code language={match[1]}>{String(children).replace(/\n$/, "")}</Code>
  ) : (
    <Code>{children}</Code>
  );
};

const Link: Components["a"] = ({ href, ...props})  => {
  if (href) {
    return <TextLink href={href} {...props} />
  }

  return <a {...props} href={href} />
}

export const Markdown = ({ markdown, allowHtml }: MarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[gfm]}
      rehypePlugins={
        allowHtml
          ? [
              rehypeRaw,
              [
                rehypeSanitize,
                {
                  ...defaultSchema,
                  attributes: {
                    ...defaultSchema.attributes,
                    code: [
                      ...(defaultSchema.attributes?.code || []),
                      [
                        "className",
                        "language-js",
                        "language-java",
                        "language-md",
                        "language-python",
                      ],
                    ],
                  },
                },
              ],
            ]
          : undefined
      }
      components={{
        code: CodeBlock,
        blockquote: Blockquote,
        table: Table,
        thead: TableHead,
        tbody: TableBody,
        tr: TableRow,
        td: TableCell,
        th: TableCell,
        a: Link,
      }}
      children={markdown}
    />
  );
};
