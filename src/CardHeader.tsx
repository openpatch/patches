/** @jsx jsx */
import { ReactNode, forwardRef, Ref } from "react";
import { jsx, css } from "@emotion/core";

export type CardHeaderProps = {
  action?: ReactNode;
  avatar?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  ref?: Ref<HTMLDivElement>;
};

export const CardHeader = forwardRef(
  (
    { action, avatar, title, subtitle }: CardHeaderProps,
    ref: CardHeaderProps["ref"]
  ) => {
    return <div ref={ref}></div>;
  }
);
