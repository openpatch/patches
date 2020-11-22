/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/react";
import { Box } from "./Box";

export type CardContentProps = {
  children?: ReactNode;
};

export const CardContent = ({ children }: CardContentProps) => (
  <Box p="standard">{children}</Box>
);
