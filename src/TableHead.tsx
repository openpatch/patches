import { ReactNode } from "react";
import { Box } from "./Box";

export type TableHeadProps = {
  children?: ReactNode;
};

export const TableHead = ({ children }: TableHeadProps) => {
  return <Box as="thead">{children}</Box>;
};
