import { ReactNode } from "react";
import { css } from "@emotion/react";
import { Text } from "./Text";
import { Check } from "./icons/shade";
import { Icon } from "./Icon";
import { Box } from "./Box";

export type FormSuccessTextProps = {
  children?: ReactNode;
};

export const FormSuccessText = ({ children }: FormSuccessTextProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      css={(theme) => css`
        svg {
          margin-right: ${theme.space.xxsmall};
        }
      `}
    >
      <Icon color="success" size="small">
        <Check />
      </Icon>
      <Text textColor="success.700" role="alert">
        {children}
      </Text>
    </Box>
  );
};
