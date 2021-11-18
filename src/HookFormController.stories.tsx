import { Meta, Story } from "@storybook/react/types-6-0";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { ButtonPrimary } from "./ButtonPrimary";
import { CodeEditor } from "./CodeEditor";
import { Form } from "./Form";
import { FormFooter } from "./FormFooter";
import { FormHeader } from "./FormHeader";
import { HookFormController } from "./HookFormController";
import { Input } from "./Input";
import { MarkdownEditor } from "./MarkdownEditor";
import { Slider } from "./Slider";

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
  fields: {
    name: string;
  }[];
};

const Template: Story = ({ onSubmit, onError }) => {
  const methods = useForm<FormData>({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  function handleError(errors) {
    onError?.(errors);
  }

  const { append, fields } = useFieldArray({
    name: "fields",
    control: methods.control,
  });

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit, handleError)}>
        <FormHeader>React Hook Form Example with Custom Provider</FormHeader>
        <HookFormController
          name="name"
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
          label="Slide me!"
          defaultValue={4}
          helperText="But not under 5"
          render={(props) => <Slider {...props} />}
          rules={{
            validate: {
              over5: (v) => v > 5 || "needs to be over 5",
            },
          }}
        />
        <HookFormController
          name="markdown"
          label="Markdown with Preview"
          defaultValue=""
          rules={{
            validate: {
              notEmpty: (v) => {
                if (v && v.length > 0) {
                  return true;
                }

                return "Can not be empty";
              },
            },
          }}
          render={({ value, onChange }) => (
            <MarkdownEditor
              value={value}
              allowPreview
              variant="outlined"
              onChange={(v) => onChange(v)}
            />
          )}
        />
        <HookFormController
          name="code"
          defaultValue=""
          label="Code Editor"
          render={({ value, onChange }) => (
            <CodeEditor
              variant="input"
              value={value}
              onChange={(v) => onChange(v)}
            />
          )}
        />
        {fields.map((_, index) => (
          <HookFormController
            name={`fields[${index}].name`}
            label={`Field ${index}`}
            defaultValue=""
            rules={{
              validate: {
                notEmpty: (v) => {
                  if (v && v.length > 0) {
                    return true;
                  }

                  return "Can not be empty";
                },
              },
            }}
            render={Input}
          />
        ))}
        <ButtonPrimary fullWidth onClick={() => append({ name: "" })}>
          Add Field
        </ButtonPrimary>
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
