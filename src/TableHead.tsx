/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/react";
import { Box } from "./Box";

export type TableHeadProps = {
  children?: ReactNode;
};

export const TableHead = ({ children }: TableHeadProps) => {
  return <Box as="thead">{children}</Box>;
};
