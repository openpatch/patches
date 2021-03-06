import { ReactNode } from "react";
import { Box } from "./Box";
import styled from "@emotion/styled";
import { variant } from "./system";

export type MainProps = {
  children?: ReactNode;
  variant?: "stack" | "overlap";
};

const StyledMain = styled(Box)(
  variant<{
    "::before"?: object;
  }>({
    scale: "main",
    prop: "variant",
    variants: {
      stack: {},
      overlap: {
        "::before": {
          backgroundColor: "primary.900",
          content: "''",
          display: "block",
          height: ["190px", "210px"],
          left: 0,
          position: "absolute",
          top: 0,
          width: "100%",
          "z-index": -1,
        },
      },
    },
  })
);

export const Main = ({ children, variant = "stack" }: MainProps) => {
  return (
    <StyledMain as="main" variant={variant}>
      <Box
        maxWidth="large"
        margin="auto"
        px={["small", "medium", "medium"]}
        py="medium"
      >
        {children}
      </Box>
    </StyledMain>
  );
};
