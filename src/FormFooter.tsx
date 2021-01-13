import { ReactNode } from "react";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";
import { ButtonPrimary } from "./ButtonPrimary";
import { Box } from "./Box";

export type FormFooterProps = {
  children?: ReactNode;
  disabled?: boolean;
  onSave?: () => void;
  onCancel?: () => void;
  locale?: {
    save: string;
    cancel: string;
  };
};

export const FormFooter = ({
  locale = { save: "Save", cancel: "Cancel" },
  disabled = false,
  onSave = () => {},
  onCancel = () => {},
}: FormFooterProps) => {
  function handleSave() {
    if (!disabled) {
      onSave();
    }
  }
  return (
    <Box mt="large" display="flex" justifyContent="flex-end">
      <ButtonGroup space="standard">
        <Button onClick={onCancel}>{locale.cancel}</Button>
        <ButtonPrimary onClick={handleSave} type="submit" disabled={disabled}>
          {locale.save}
        </ButtonPrimary>
      </ButtonGroup>
    </Box>
  );
};
