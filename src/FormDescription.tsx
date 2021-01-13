import { ReactNode } from "react";
import { Text } from "./Text";

export type FormDescriptionProps = {
  children?: ReactNode;
};

export const FormDescription = ({ children }: FormDescriptionProps) => {
  return (
    <Text mb="small" textColor="neutral.500">
      {children}
    </Text>
  );
};
