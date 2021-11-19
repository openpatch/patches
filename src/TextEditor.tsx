import { forwardRef, Fragment } from "react";
import { CodeEditor, CodeEditorProps, CodeEditorRef } from "./CodeEditor";

export type TextEditorProps = CodeEditorProps;
export type TextEditorRef = CodeEditorRef;

export const TextEditor = forwardRef<TextEditorRef, TextEditorProps>(
  (props: TextEditorProps, ref) => {
    return (
      <Fragment>
        <CodeEditor
          ref={ref}
          fontFamily="body"
          wrapLines
          lineNumbers={false}
          {...props}
        />
      </Fragment>
    );
  }
);
