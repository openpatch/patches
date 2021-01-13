import { Story, Meta } from "@storybook/react/types-6-0";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Form } from "./Form";
import { FormFooter } from "./FormFooter";
import { FormHeader } from "./FormHeader";
import {
  HookFormController,
  HookFormControllerProps,
} from "./HookFormController";
import { Input } from "./Input";
import { Slider } from "./Slider";
import { MarkdownEditor } from "./MarkdownEditor";
import { CodeEditor } from "./CodeEditor";

export default {
  title: "Form/HookFormController",
  component: HookFormController,
  argTypes: {
    onSubmit: {
      action: "submitted",
    },
    onError: {
      action: "error",
    },
  },
} as Meta;

type FormData = {
  name: string;
  slider: string;
  markdown: string;
};

const Template: Story<HookFormControllerProps> = ({ onSubmit, onError }) => {
  const methods = useForm<FormData>({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  function handleError(errors) {
    onError(errors);
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit, handleError)}>
        <FormHeader>React Hook Form Example with Custom Provider</FormHeader>
        <HookFormController
          name="name"
          control={methods.control}
          label="I am joking"
          helperText="This is a joke. You need to insert only a and only b at the same time."
          render={Input}
          defaultValue=""
          rules={{
            required: true,
            validate: {
              onlyA: (v) => v === "a" || "only a is allowed",
              onlyB: (v) => v === "b" || "only b is allowed",
            },
          }}
        />
        <HookFormController
          name="slider"
          control={methods.control}
          label="Slide me!"
          defaultValue={4}
          helperText="But not under 5"
          render={Slider}
          rules={{
            validate: {
              over5: (v) => v > 5 || "needs to be over 5",
            },
          }}
        />
        <HookFormController
          name="markdown"
          control={methods.control}
          label="Markdown with Preview"
          render={({ value, onChange, onBlur }) => (
            <MarkdownEditor value={value} onChange={onChange} onBlur={onBlur} />
          )}
        />
        <HookFormController
          name="code"
          control={methods.control}
          label="Code Editor"
          render={({ value, onChange, onBlur }) => (
            <CodeEditor
              variant="input"
              value={value}
              onChange={(_, v) => onChange(v)}
              onBlur={onBlur}
            />
          )}
        />
        <FormFooter
          disabled={
            !methods.formState.isDirty || methods.formState.isSubmitting
          }
        />
      </Form>
    </FormProvider>
  );
};

export const Example = Template.bind({});
