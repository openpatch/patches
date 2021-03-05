import { Fragment, ReactNode } from "react";
import {
  Controller,
  ControllerProps,
  FieldError,
  useFormContext,
  ValidateResult,
  get,
} from "react-hook-form";
import { FormLabel } from "./FormLabel";
import { FormErrorText } from "./FormErrorText";
import { FormHelperText } from "./FormHelperText";

export type HookFormControllerRenderProps = {
  onChange: (...event: any[]) => void;
  onBlur: () => void;
  id: string;
  value: any;
  name: string;
  error: boolean;
  required: boolean;
};

export type HookFormControllerProps = Omit<
  ControllerProps<"input">,
  "render" | "as"
> & {
  label?: ReactNode;
  helperText?: ReactNode;
  render: (props: HookFormControllerRenderProps) => React.ReactElement;
};

type FormControllerErrorProps = {
  message: ValidateResult;
};

const FormControllerError = ({ message }: FormControllerErrorProps) => {
  return <FormErrorText>{message}</FormErrorText>;
};

export const HookFormController = ({
  name,
  render,
  control,
  defaultValue,
  label,
  helperText,
  ...props
}: HookFormControllerProps) => {
  const methods = useFormContext();
  const required = props.rules?.required ? true : false;
  const errors: FieldError = get(methods.errors, name);
  console.log(errors);
  return (
    <Fragment>
      {label && (
        <FormLabel required={required} htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        {...props}
        render={({ onChange, onBlur, value, name }) => {
          return render({
            id: name,
            onChange,
            onBlur,
            value,
            name,
            required,
            error: Boolean(errors),
          });
        }}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {errors && <FormControllerError message={errors.message} />}
    </Fragment>
  );
};
