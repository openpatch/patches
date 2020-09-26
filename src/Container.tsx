/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/core";
import { maxWidth, MaxWidthProps } from "styled-system";
import styled from "./themes/styled";

export type ContainerProps = MaxWidthProps;

export const Container = styled.div<ContainerProps>(
  {
    margin: "0 auto",
  },
  maxWidth
);

Container.defaultProps = {
  maxWidth: "medium",
};
