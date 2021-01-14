import { ReactNode } from "react";
import { css } from "@emotion/react";
import { Text } from "./Text";
import { Important } from "./icons/shade";
import { Icon } from "./Icon";
import { Box } from "./Box";

export type FormWarningTextProps = {
  children?: ReactNode;
};

export const FormWarningText = ({ children }: FormWarningTextProps) => {
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
      <Icon color="warning" size="small">
        <Important />
      </Icon>
      <Text textColor="warning.900" role="alert">
        {children}
      </Text>
    </Box>
  );
};
