import { ReactNode } from "react";
import { css } from "@emotion/react";
import { Text } from "./Text";

export type FormLabelProps = {
  htmlFor: string;
  children?: ReactNode;
  required?: boolean;
};

export const FormLabel = ({
  htmlFor,
  children,
  required = false,
}: FormLabelProps) => {
  return (
    <Text
      mt="medium"
      mb="xsmall"
      fontWeight="medium"
      as="label"
      htmlFor={htmlFor}
      css={css`
        display: inline-block;
      `}
    >
      {children} {required && "*"}
    </Text>
  );
};
