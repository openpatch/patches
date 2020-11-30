import styled from "@emotion/styled";
import { maxWidth, MaxWidthProps } from "styled-system";

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
