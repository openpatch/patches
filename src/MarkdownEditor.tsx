import { css, Global } from "@emotion/react";
import { EditorChange } from "codemirror";
import { useState } from "react";
import { ButtonSecondary } from "./ButtonSecondary";
import { CodeEditorProps, CodeEditor } from "./CodeEditor";
import { Markdown } from "./Markdown";
import { Box } from "./Box";

export type MarkdownEditorProps = {
  onBlur?: () => void;
  locale?: {
    preview: string;
    edit: string;
  };
} & Omit<CodeEditorProps, "language">;

const defaultLocale = {
  preview: "Preview",
  edit: "Edit",
};

export const MarkdownEditor = ({
  lineNumbers = false,
  value = "",
  onChange = () => {},
  onBlur = () => {},
  height = "auto",
  locale = defaultLocale,
  ...props
}: MarkdownEditorProps) => {
  const [isPreview, setIsPreview] = useState(false);
  const [innerValue, setInnerValue] = useState(value);

  function onInnerChange(change: EditorChange, value: string) {
    setInnerValue(value);
    onChange(change, value);
  }

  return (
    <Box position="relative">
      <ButtonSecondary
        tone="accent"
        onClick={() => setIsPreview((p) => !p)}
        css={css`
          position: absolute;
          top: 10px;
          right: 20px;
          z-index: 99;
        `}
      >
        {isPreview ? locale.edit : locale.preview}
      </ButtonSecondary>
      <Global
        styles={css`
          .cm-header-1 {
            font-size: 150%;
          }
          .cm-header-2 {
            font-size: 130%;
          }
          .cm-header-3 {
            font-size: 120%;
          }
          .cm-header-4 {
            font-size: 110%;
          }
          .cm-header-5 {
            font-size: 100%;
          }
          .cm-header-6 {
            font-size: 90%;
          }
          .cm-strong {
            font-size: 100%;
          }
        `}
      />
      {isPreview ? (
        <Box
          css={css`
            height: ${height};
          `}
          overflowY="auto"
        >
          <Markdown markdown={innerValue} />
        </Box>
      ) : (
        <CodeEditor
          variant="normal"
          height={height}
          language="markdown"
          lineNumbers={lineNumbers}
          value={innerValue}
          onChange={onInnerChange}
          onBlur={onBlur}
          config={{
            lineWrapping: true,
          }}
          {...props}
        />
      )}
    </Box>
  );
};
