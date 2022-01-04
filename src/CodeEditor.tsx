import CodeMirror, { CodeMirrorProps } from "rodemirror";
import { closeBrackets } from "@codemirror/closebrackets";
import { sql } from "@codemirror/lang-sql";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { markdown } from "@codemirror/lang-markdown";
import { css } from "@emotion/react";
import { Box, BoxProps } from "./Box";
import { CodeEditorStyles, CodeEditorStylesProps } from "./CodeEditorStyles";
import { forwardRef, useImperativeHandle, useMemo, useState } from "react";
import { Extension, Transaction } from "@codemirror/state";
import { python } from "@codemirror/lang-python";
import {
  drawSelection,
  EditorView,
  highlightSpecialChars,
} from "@codemirror/view";
import {
  highlightActiveLineGutter,
  lineNumbers as lineNumbersEx,
} from "@codemirror/gutter";
import { indentOnInput } from "@codemirror/language";
import { defaultHighlightStyle } from "@codemirror/highlight";

export type CodeEditorProps = {
  language?:
    | "sql"
    | "java"
    | "python"
    | "javascript"
    | "markdown"
    | "typescript";
  height?: BoxProps["height"];
  value?: string;
  lineNumbers?: boolean;
  disabled?: boolean;
  fontFamily?: CodeEditorStylesProps["fontFamily"];
  wrapLines?: boolean;
  selection?: CodeMirrorProps["selection"];
  variant?: "outlined" | "normal" | "input";
  onChange?: (value: string, changes: readonly Transaction[]) => void;
};

export type CodeEditorRef = EditorView | null;

export const CodeEditor = forwardRef<unknown, CodeEditorProps>(
  (
    {
      language = "markdown",
      value = "",
      onChange = () => {},
      selection,
      disabled,
      wrapLines = false,
      height = "auto",
      fontFamily,
      lineNumbers = false,
      variant = "normal",
    },
    ref
  ) => {
    const [editorView, setEditorView] = useState<EditorView | null>(null);

    useImperativeHandle(ref, () => editorView);

    const extensions = useMemo<Extension[]>(() => {
      const e: Extension[] = [
        highlightActiveLineGutter(),
        highlightSpecialChars(),
        defaultHighlightStyle.fallback,
        drawSelection(),
        closeBrackets(),
        indentOnInput(),
      ];

      if (lineNumbers) {
        e.push(lineNumbersEx());
      }

      if (disabled) {
        e.push(
          EditorView.contentAttributes.of({ contenteditable: false } as any)
        );
      }

      if (wrapLines) {
        e.push(EditorView.lineWrapping);
      }

      switch (language) {
        case "typescript":
        case "javascript": {
          e.push(javascript());
          break;
        }
        case "python": {
          e.push(python());
          break;
        }
        case "java": {
          e.push(java());
          break;
        }
        case "sql": {
          e.push(sql());
          break;
        }
        default: {
          e.push(markdown());
        }
      }
      return e;
    }, [lineNumbers, disabled, language]);

    return (
      <Box
        height={height}
        onClick={() => {
          editorView?.focus();
        }}
        overflowY="auto"
        css={(theme) => [
          variant === "outlined" &&
            css`
              border-style: solid;
              border-radius: ${theme.radii.small};
              border-width: ${theme.borderWidths.standard};
              border-color: ${theme.colors.neutral["200"]};

              > div,
              > div > div {
                border-radius: ${theme.radii.small};
              }
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
        <CodeEditorStyles fontFamily={fontFamily} />
        <CodeMirror
          value={value}
          extensions={extensions}
          selection={selection}
          onEditorViewChange={setEditorView}
          onUpdate={(v) => {
            if (v.docChanged) {
              onChange(v.state.doc.toString(), v.transactions as any);
            }
          }}
        />
      </Box>
    );
  }
);
