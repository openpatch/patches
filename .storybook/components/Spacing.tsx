import React from "react";
import styled from "../../src/styled";
import ThemeProvider from "../../src/ThemeProvider";
import theme from "../../src/themes/base";

interface BoxProps {
  spacing: number;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const Box = styled.div<BoxProps>`
  background-color: ${({ theme }) => theme.colors.primary[100]};
  width: ${({ theme, spacing }) => theme.spacing[spacing]};
  height: ${({ theme, spacing }) => theme.spacing[spacing]};
  margin-right: ${({ theme }) => theme.spacing[2]};
`;

const Pixel = styled.div`
  margin-left: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.neutrals[300]};
`;

const Label = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight[2]};
`;

const Spacing: React.FC<BoxProps> = ({ spacing }) => (
  <ThemeProvider>
    <Wrapper>
      <Box spacing={spacing} />
      <Label>spacing[{spacing}]</Label>
      <Pixel>{theme.spacing[spacing]}</Pixel>
    </Wrapper>
  </ThemeProvider>
);

export default Spacing;
