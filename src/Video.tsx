/** @jsx jsx */
import { HTMLAttributes, ReactNode } from "react";
import { jsx, css } from "@emotion/core";
import {
  border,
  BorderProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
} from "./system";
import styled from "./themes/styled";

export type VideoProps = {
  src: string;
  loop?: boolean;
  autoPlay?: boolean;
} & BorderProps &
  SpaceProps &
  ShadowProps &
  HTMLAttributes<HTMLVideoElement>;

export const StyledVideo = styled.video<
  BorderProps & SpaceProps & ShadowProps & HTMLAttributes<HTMLVideoElement>
>(border, space, shadow);

export const Video = ({ src, loop, autoPlay, ...props }: VideoProps) => {
  return (
    <StyledVideo loop={loop} autoPlay={autoPlay} {...props}>
      <source src={src} />
    </StyledVideo>
  );
};
