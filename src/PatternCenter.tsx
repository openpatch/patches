import { ReactNode } from "react";
import { Box } from "./Box";
import { Pattern } from "./Pattern";

export type PatternCenterProps = {
  children?: ReactNode;
};

export const PatternCenter = ({ children }: PatternCenterProps) => {
  return (
    <Box
      minHeight="100vh"
      width="100vw"
      maxWidth="100%"
      position="relative"
      overflowY="auto"
      overflowX="hidden"
      backgroundColor="primary.900"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Pattern
        position="fixed"
        backgroundColor="transparent"
        foregroundColor="white"
        opacity={0.05}
        top="0"
        bottom="0"
        right="0"
        left="0"
      />
      {children}
    </Box>
  );
};
