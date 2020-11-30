import { ReactNode } from "react";
import { Box } from "./Box";

export type CardContentProps = {
  children?: ReactNode;
};

export const CardContent = ({ children }: CardContentProps) => (
  <Box p="standard">{children}</Box>
);
