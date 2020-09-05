import React from "react";
import styled from "../../src/styled";
import ThemeProvider from "../../src/ThemeProvider";
import theme from "../../src/themes/base";

interface WrapperProps {
  boxShadow: number;
}

const Wrapper = styled.div<WrapperProps>`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  box-shadow: ${({ theme, boxShadow }) => theme.boxShadow[boxShadow]};
  padding: ${({ theme }) => theme.spacing[6]};
`;

const Label = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight["normal"]};
`;

const Shadow: React.FC<WrapperProps> = ({ boxShadow }) => (
  <ThemeProvider>
    <Wrapper boxShadow={boxShadow}>
      <Label>
        boxShadow[{boxShadow}]: {theme.boxShadow[boxShadow]}
      </Label>
    </Wrapper>
  </ThemeProvider>
);

export default Shadow;
