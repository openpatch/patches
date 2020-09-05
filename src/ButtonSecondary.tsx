import React from "react";
import tw from "twin.macro";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";

export interface ButtonSecondaryProps
  extends Omit<ButtonBaseProps, "cssOverride"> {}

export const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  ...props
}) => {
  return (
    <ButtonBase
      {...props}
      cssOverride={tw`border-primary-200 border-2 bg-transparent hover:bg-primary-50 active:bg-primary-100 text-primary-500`}
    ></ButtonBase>
  );
};
