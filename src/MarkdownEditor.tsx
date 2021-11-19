import { css } from "@emotion/react";
import { useRef, useState } from "react";
import { Box } from "./Box";
import { ButtonSecondary } from "./ButtonSecondary";
import { CodeEditor, CodeEditorProps, CodeEditorRef } from "./CodeEditor";
import { Markdown } from "./Markdown";

export type MarkdownEditorProps = {
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
  variant,
  allowPreview = false,
  locale = defaultLocale,
  height,
  ...props
}: MarkdownEditorProps) => {
  const editor = useRef<CodeEditorRef>();
  const [isPreview, setIsPreview] = useState(false);

  function getContent() {
    return editor.current?.state.doc.toString() || "";
  }

  return (
    <Box
      position="relative"
      minHeight="80px"
      height={height}
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
      {isPreview ? (
        <Box p="xxsmall">
          <Markdown markdown={getContent()} />
        </Box>
      ) : (
        <CodeEditor
          ref={editor}
          variant="normal"
          language="markdown"
          wrapLines
          lineNumbers={lineNumbers}
          value={value}
          onChange={onChange}
          {...props}
        />
      )}
    </Box>
  );
};
