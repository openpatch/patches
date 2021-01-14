import { ReactNode } from "react";
import { Box, BoxProps } from "./Box";
import { Pattern, PatternProps } from "./Pattern";

export type PatternCenterProps = {
  children?: ReactNode;
  backgroundColor?: BoxProps["backgroundColor"];
  foregroundColor?: PatternProps["foregroundColor"];
};

export const PatternCenter = ({
  children,
  backgroundColor = "primary.900",
  foregroundColor = "white",
}: PatternCenterProps) => {
  return (
    <Box
      minHeight="100vh"
      width="100vw"
      maxWidth="100%"
      position="relative"
      overflowY="auto"
      overflowX="hidden"
      backgroundColor={backgroundColor}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Pattern
        position="fixed"
        backgroundColor="transparent"
        foregroundColor={foregroundColor}
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
