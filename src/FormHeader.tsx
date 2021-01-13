import { css } from "@emotion/react";
import { Heading } from "./Heading";
import { Box } from "./Box";
import { Divider } from "./Divider";
import { ReactNode } from "react";

export type FormHeaderProps = {
  id?: string;
  children?: ReactNode;
};

export const FormHeader = ({ id, children }: FormHeaderProps) => {
  return (
    <Box
      mb="large"
      id={id}
      css={css`
        :target:before {
          content: "";
          display: block;
          height: 100px;
          margin: -100px 0 0;
        }
      `}
    >
      <Heading
        mb="xsmall"
        as="h3"
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        {children}
      </Heading>
      <Divider color="neutral.100" />
    </Box>
  );
};
