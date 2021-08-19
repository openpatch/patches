import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Box } from "./Box";
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [stackHeight, setStackHeight] = useState(215);

  const onResize = () => {
    if (contentRef.current) {
      const offset =
        contentRef.current.getBoundingClientRect().top + window.pageYOffset;
      const height = contentRef.current.clientHeight;
      setStackHeight(Math.min(65, height / 2) + offset);
    }
  };

  useEffect(() => {
    if (variant === "overlap") {
      onResize();
      // sometimes new content comes in. It would be better to listen to changes
      // to the page header component, but this will do.
      setTimeout(() => onResize(), 5000);
      window.addEventListener("resize", onResize);

      return () => window.removeEventListener("resize", onResize);
    }

    return;
  }, []);

  return (
    <StyledMain
      as="main"
      variant={variant}
      flex={1}
      css={
        variant === "overlap"
          ? css`
              ::before {
                height: ${stackHeight}px;
              }
            `
          : undefined
      }
    >
      <Box
        ref={contentRef}
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
