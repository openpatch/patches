import { Controlled as CodeMirror } from "react-codemirror2";
import { css } from "@emotion/react";
import { Box } from "./Box";
import { CodeEditorStyles } from "./CodeEditorStyles";

import {
  Editor,
  EditorChange,
  EditorConfiguration,
  EditorSelectionChange,
} from "codemirror";
import { CSSObject } from "@emotion/react";

const languages = {
  markdown: "markdown",
  java: "text/x-java",
  c: "clike",
  python: "python",
  sql: "sql",
  javascript: "javascript",
  typescript: "text/typescript",
} as const;

require("codemirror/addon/edit/closebrackets.js");
// require("codemirror/keymap/emacs.js");
// require("codemirror/keymap/vim.js");

require("codemirror/mode/markdown/markdown.js");
require("codemirror/mode/clike/clike.js");
require("codemirror/mode/sql/sql.js");
require("codemirror/mode/python/python.js");
require("codemirror/mode/javascript/javascript.js");

export type CodeEditorProps = {
  language?: keyof typeof languages;
  value?: string;
  height?: CSSObject["height"];
  disabled?: boolean;
  config?: EditorConfiguration;
  autoCloseBrackets?: boolean;
  lineNumbers?: boolean;
  keyMap?: "default";
  theme?: "light" | "dark";
  variant?: "outlined" | "normal" | "input";
  selection?: {
    ranges: Array<{ anchor: CodeMirror.Position; head: CodeMirror.Position }>;
  };
  onChange?: (change: EditorChange, value: string) => void;
  onBlur?: () => void;
  onSelection?: (selection: EditorSelectionChange) => void;
  onGutterClick?: (lineNumber: number, gutter: string) => void;
  editorDidMount?: (editor: Editor, value: string, cb: () => void) => void;
};

export const CodeEditor = ({
  language = "markdown",
  value = "",
  config = {},
  height,
  theme = "light",
  disabled = false,
  keyMap = "default",
  autoCloseBrackets = true,
  lineNumbers = true,
  onChange = () => {},
  onSelection = () => {},
  onGutterClick = () => {},
  onBlur = () => {},
  editorDidMount,
  selection,
  variant = "normal",
}: CodeEditorProps) => {
  return (
    <Box
      css={(theme) => [
        variant === "outlined" &&
          css`
            border-style: solid;
            border-width: ${theme.borderWidths.standard};
            border-color: ${theme.colors.neutral["200"]};
          `,
        variant === "input" &&
          css`
            border-radius: ${theme.radii.small};
            border-color: ${theme.colors.neutral["100"]};
            border-style: solid;
            border-width: ${theme.borderWidths.standard};

            > div,
            > div > div {
              border-radius: ${theme.radii.small};
            }
          `,
      ]}
    >
      <CodeEditorStyles height={height} />
      <CodeMirror
        value={value}
        selection={selection}
        editorDidMount={editorDidMount}
        options={
          {
            ...config,
            theme: theme === "light" ? "default" : "vscode-dark",
            autoCloseBrackets,
            readOnly: disabled ? "nocursor" : false,
            keyMap,
            lineNumbers,
            mode: languages[language],
          } as any
        }
        onGutterClick={(_, lineNumber, gutter) => {
          onGutterClick(lineNumber, gutter);
        }}
        onBlur={onBlur}
        onSelection={(_, data) => {
          onSelection(data);
        }}
        onBeforeChange={(_, data, value) => {
          onChange(data, value);
        }}
      />
    </Box>
  );
};
