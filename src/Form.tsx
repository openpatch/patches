import { FormEvent, HTMLAttributes } from "react";

export type FormProps = {} & HTMLAttributes<HTMLFormElement>;

export const Form = ({ onSubmit, ...props }: FormProps) => {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (onSubmit) {
      onSubmit(e);
    }
  }
  return <form onSubmit={handleSubmit} {...props} />;
};
