import { ReactNode } from "react";
import { Box } from "./Box";

export type TableRowProps = {
  children?: ReactNode;
};

export const TableRow = ({ children }: TableRowProps) => {
  return <Box as="tr">{children}</Box>;
};
