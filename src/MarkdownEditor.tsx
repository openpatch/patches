import { css, Global } from "@emotion/react";
import { EditorChange } from "codemirror";
import { useEffect, useState } from "react";
import { Box } from "./Box";
import { ButtonSecondary } from "./ButtonSecondary";
import { CodeEditor, CodeEditorProps } from "./CodeEditor";
import { Markdown } from "./Markdown";

export type MarkdownEditorProps = {
  onBlur?: (value: string) => void;
  allowPreview?: boolean;
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
  allowPreview = false,
  locale = defaultLocale,
  ...props
}: MarkdownEditorProps) => {
  const [isPreview, setIsPreview] = useState(false);
  const [innerValue, setInnerValue] = useState(value);

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  function onInnerChange(change: EditorChange, value: string) {
    setInnerValue(value);
    onChange(change, value);
  }

  return (
    <Box position="relative">
      {allowPreview && (
        <ButtonSecondary
          tone="accent"
          onClick={() => setIsPreview((p) => !p)}
          css={(theme) => css`
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: ${theme.fontSizes.xsmall};
            z-index: 99;
            opacity: 0.8;
          `}
        >
          {isPreview ? locale.edit : locale.preview}
        </ButtonSecondary>
      )}
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
