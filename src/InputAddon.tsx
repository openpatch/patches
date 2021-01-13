import { Box } from "./Box";

export type InputAddonProps = {
  children?: string;
  className?: string;
};

export const InputAddon = ({ children, ...props }: InputAddonProps) => {
  return (
    <Box
      as="span"
      minWidth="auto"
      paddingY="xxsmall"
      paddingX="xsmall"
      textColor="neutral.400"
      backgroundColor="neutral.50"
      {...props}
    >
      {children}
    </Box>
  );
};
