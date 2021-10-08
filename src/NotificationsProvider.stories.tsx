import { Meta } from "@storybook/react/types-6-0";
import { ButtonPrimary } from "./ButtonPrimary";
import { NotificationsProvider, notify } from "./NotificationsProvider";

export default {
  title: "Components/NotificationsProvider",
  component: NotificationsProvider,
  argTypes: {},
} as Meta;

export const Info = () => {
  const dispatch = () => {
    notify.info("Info");
  };
  return <ButtonPrimary onClick={dispatch}>Dispatch</ButtonPrimary>;
};

export const Warn = () => {
  const dispatch = () => {
    notify.warn("Warn");
  };
  return <ButtonPrimary onClick={dispatch}>Dispatch</ButtonPrimary>;
};

export const Success = () => {
  const dispatch = () => {
    notify.success("Success");
  };
  return <ButtonPrimary onClick={dispatch}>Dispatch</ButtonPrimary>;
};

export const Error = () => {
  const dispatch = () => {
    notify.error("Error");
  };
  return <ButtonPrimary onClick={dispatch}>Dispatch</ButtonPrimary>;
};
