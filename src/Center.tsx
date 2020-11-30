import { ReactNode } from "react";
import { Box, BoxProps } from "./Box";

export type CenterProps = {
  children?: ReactNode;
} & BoxProps;

export const Center = ({ children, ...props }: CenterProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {children}
    </Box>
  );
};
