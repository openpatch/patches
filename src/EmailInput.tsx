import { Input, InputProps } from "./Input";

export type EmailInputProps = {} & InputProps;

export const EmailInput = ({ ...props }: EmailInputProps) => {
  return <Input type="email" {...props} />;
};
