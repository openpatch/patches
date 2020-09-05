import React from "react";
import styled from "../../src/styled";
import ThemeProvider from "../../src/ThemeProvider";
import theme from "../../src/themes/base";

interface TextProps {
  family: "body" | "code" | "display";
  size: number;
  weight: number;
}

const Label = styled.div<TextProps>`
  font-family: ${({ theme, family }) =>
    family ? theme.fontFamily[family].join(",") : null};
  font-size: ${({ theme, size }) => (size ? theme.fontSize[size] : null)};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.fontWeight[weight] : null};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const Text: React.FC<TextProps> = ({ family, size, weight }) => (
  <ThemeProvider>
    <>
      {family && (
        <Label family={family} size={size} weight={weight}>
          fontFamily[{family}]: {theme.fontFamily[family]};
        </Label>
      )}
      {size && (
        <Label family={family} size={size} weight={weight}>
          fontSize[{size}]: {theme.fontSize[size]};
        </Label>
      )}
      {weight && (
        <Label family={family} size={size} weight={weight}>
          fontWeight[{weight}]: {theme.fontWeight[weight]};
        </Label>
      )}
    </>
  </ThemeProvider>
);

export default Text;
