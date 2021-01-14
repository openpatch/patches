import { ReactNode } from "react";
import { css } from "@emotion/react";
import { Text } from "./Text";
import { Information } from "./icons/shade";
import { Icon } from "./Icon";
import { Box } from "./Box";

export type FormInfoTextProps = {
  children?: ReactNode;
};

export const FormInfoText = ({ children }: FormInfoTextProps) => {
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
      <Icon color="info" size="small">
        <Information />
      </Icon>
      <Text textColor="info.800" role="alert">
        {children}
      </Text>
    </Box>
  );
};
