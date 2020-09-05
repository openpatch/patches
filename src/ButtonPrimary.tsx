import React from "react";
import tw from "twin.macro";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";

export interface ButtonPrimaryProps
  extends Omit<ButtonBaseProps, "cssOverride"> {}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ ...props }) => {
  return (
    <ButtonBase
      {...props}
      cssOverride={tw`bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-primary-50`}
    ></ButtonBase>
  );
};
