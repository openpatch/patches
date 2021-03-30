import { ReactNode, useState } from "react";
import { ButtonPrimary, ButtonPrimaryProps } from "../ButtonPrimary";
import { ButtonSecondary } from "../ButtonSecondary";
import { CardContent } from "../CardContent";
import { CardFooter } from "../CardFooter";
import { CardHeader } from "../CardHeader";
import { Modal } from "../Modal";

export type useConfirmProps = {
  title: string;
  description?: ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  labels?: {
    confirm: string;
    cancel: string;
  };
  severity?: "danger" | "warning" | "normal";
};

export const useConfirm = ({
  title,
  description,
  onConfirm,
  onCancel,
  labels = {
    confirm: "Confirm",
    cancel: "Cancel",
  },
  severity = "normal",
}: useConfirmProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    onCancel();
  };

  const handleConfirm = () => {
    setOpen(false);
    onConfirm();
  };

  const requestConfirm = () => {
    setOpen(true);
  };

  let tone: ButtonPrimaryProps["tone"] = "neutral";
  switch (severity) {
    case "danger": {
      tone = "error";
      break;
    }
    case "normal": {
      tone = "neutral";
      break;
    }
    case "warning": {
      tone = "warning";
      break;
    }
  }

  const modal = (
    <Modal open={open} onClose={handleClose}>
      <CardHeader>{title}</CardHeader>
      {description && <CardContent>{description}</CardContent>}
      <CardFooter>
        <ButtonPrimary tone={tone} onClick={handleConfirm}>
          {labels.confirm}
        </ButtonPrimary>
        <ButtonSecondary tone="neutral" onClick={handleClose}>
          {labels.cancel}
        </ButtonSecondary>
      </CardFooter>
    </Modal>
  );

  return [requestConfirm, modal];
};
