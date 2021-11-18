import { Global, css } from "@emotion/react";
import { Theme } from "./themes";

export type CodeEditorStylesProps = {
  fontFamily?: keyof Theme["fonts"];
};

export const CodeEditorStyles = ({
  fontFamily = "monospace",
}: CodeEditorStylesProps) => {
  return (
    <Global
      styles={(theme) => css`
        /* BASICS */
        .cm-editor .cm-content {
          /* Set height, width, borders, and global font properties here */
          font-family: ${theme.fonts[fontFamily]};
          color: black;
          direction: ltr;
        }
      `}
    />
  );
};
