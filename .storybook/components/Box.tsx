import React from "react";
import styled from "../../src/styled";
import ThemeProvider from "../../src/ThemeProvider";
import theme from "../../src/themes/base";

interface BoxProps {
  radius?: number;
  width?: number;
}

const Wrapper = styled.div<BoxProps>`
  border: ${({ theme, width }) => theme.borderWidth[width || "2"]} solid
    ${({ theme }) => theme.colors.primary[500]};
  border-radius: ${({ theme, radius }) => theme.borderRadius[radius || "none"]};
  margin-bottom: ${({ theme }) => theme.spacing["6"]};
  padding: ${({ theme }) => theme.spacing["6"]};
  text-align: center;
`;

const Box: React.FC<BoxProps> = ({ radius, width }) => (
  <ThemeProvider>
    <>
      {radius && (
        <Wrapper radius={radius} width={width}>
          borderRadius[{radius}]: {theme.borderRadius[radius]}
        </Wrapper>
      )}
      {width && (
        <Wrapper radius={radius} width={width}>
          borderWidth[{width}]: {theme.borderWidth[width]}
        </Wrapper>
      )}
    </>
  </ThemeProvider>
);

export default Box;
