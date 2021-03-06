import styled from "@emotion/styled";
import { ReactElement, ReactNode } from "react";
import { Box } from "./Box";
import { ButtonGroup } from "./ButtonGroup";
import { ButtonOutlineProps } from "./ButtonOutline";
import { ButtonPrimaryProps } from "./ButtonPrimary";
import { ButtonSecondaryProps } from "./ButtonSecondary";
import { Heading } from "./Heading";
import { variant } from "./system";
import { SystemColor, SystemShadows, SystemSizes } from "./system/types";

type ActionProps =
  | ButtonPrimaryProps
  | ButtonSecondaryProps
  | ButtonOutlineProps;

export type PageHeaderProps = {
  children?: ReactNode | string;
  variant?: "stack" | "overlap";
  actions?: ReactElement<ActionProps> | ReactElement<ActionProps>[];
  meta?: ReactNode;
};

const StyledHeader = styled(Box)(
  variant<
    {
      color?: SystemColor;
      backgroundColor?: SystemColor;
      boxShadow?: SystemShadows;
      marginTop?: SystemSizes | SystemSizes[];
      "& > div"?: object;
    },
    "stack" | "overlap",
    string
  >({
    scale: "pageHeader",
    prop: "variant",
    variants: {
      stack: {
        backgroundColor: "card",
        boxShadow: "standard",
      },
      overlap: {
        backgroundColor: "primary.900",
        color: "primary.50",
        "& > div": {
          borderTopColor: "primary.800",
          borderTopStyle: "solid",
          borderTopWidth: "standard",
          paddingTop: ["medium", "large"],
        },
      },
    },
  })
);

export const PageHeader = ({
  children,
  variant = "stack",
  actions,
  meta,
}: PageHeaderProps) => {
  return (
    <StyledHeader as="header" variant={variant}>
      <Box
        maxWidth="large"
        margin="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingY={["xxsmall", "small"]}
        px={["small", "medium", "medium"]}
      >
        <Box display="flex" flexDirection="column">
          <Box mr={["small", "medium", "medium"]}>
            {children instanceof String ? (
              children
            ) : (
              <Heading as="h1" fontSize="xlarge">
                {children}
              </Heading>
            )}
          </Box>
          {meta && <Box>{meta}</Box>}
        </Box>
        {actions && <ButtonGroup space="xsmall">{actions}</ButtonGroup>}
      </Box>
    </StyledHeader>
  );
};
