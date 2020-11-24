/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "./Box";
import { variant } from "./system";
import { SystemColor, SystemColorNames } from "./system/types";

export type BadgeProps = {
  children?: ReactNode;
  tone?: SystemColorNames;
  icon?: ReactNode;
};

const StyledBadge = styled(Box)(
  variant<
    {
      color: SystemColor;
      backgroundColor: SystemColor;
      borderColor: SystemColor;
    },
    SystemColorNames,
    string
  >({
    scale: "badges",
    prop: "tone",
    variants: {
      primary: {
        color: "primary.800",
        backgroundColor: "primary.100",
        borderColor: "primary.800",
      },
      accent: {
        color: "accent.800",
        backgroundColor: "accent.100",
        borderColor: "accent.800",
      },
      neutral: {
        color: "neutral.800",
        backgroundColor: "neutral.100",
        borderColor: "neutral.800",
      },
      success: {
        color: "success.800",
        backgroundColor: "success.100",
        borderColor: "success.800",
      },
      warning: {
        color: "warning.800",
        backgroundColor: "warning.100",
        borderColor: "warning.800",
      },
      error: {
        color: "error.800",
        backgroundColor: "error.100",
        borderColor: "error.800",
      },
      info: {
        color: "info.800",
        backgroundColor: "info.100",
        borderColor: "info.800",
      },
    },
  })
);

export const Badge = ({ icon, tone = "primary", children }: BadgeProps) => {
  return (
    <StyledBadge
      tone={tone}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      fontSize="xsmall"
      fontWeight="semibold"
      px="xsmall"
      py="xxsmall"
      borderRadius="full"
      borderStyle="solid"
      borderWidth="standard"
    >
      {icon && (
        <Box
          as="span"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          width="12px"
          mr="xxsmall"
        >
          {icon}
        </Box>
      )}
      {children}
    </StyledBadge>
  );
};
