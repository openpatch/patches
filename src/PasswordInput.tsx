import { Input, InputProps } from "./Input";

export type PasswordInputProps = {} & InputProps;

export const PasswordInput = ({ ...props }: PasswordInputProps) => {
  return <Input type="password" {...props} />;
};
