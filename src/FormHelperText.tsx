import { ReactNode } from "react";
import { Text } from "./Text";

export type FormHelperTextProps = {
  children?: ReactNode;
};

export const FormHelperText = ({ children }: FormHelperTextProps) => {
  return (
    <Text mt="xxsmall" textColor="neutral.500">
      {children}
    </Text>
  );
};
