import { Story, Meta } from "@storybook/react/types-6-0";
import {
  useForm,
  Controller,
  FormProvider,
  useFieldArray,
} from "react-hook-form";
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
import { ButtonPrimary } from "./ButtonPrimary";

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
  };
};

const Template: Story<HookFormControllerProps> = ({ onSubmit, onError }) => {
  const methods = useForm<FormData>({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  function handleError(errors) {
    onError(errors);
  }

  const { append, fields } = useFieldArray({
    control: methods.control,
    name: "fields",
  });

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
          render={(props) => <Slider {...props} />}
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
          render={({ value, onChange, onBlur }) => (
            <MarkdownEditor
              value={value}
              onChange={(_, v) => onChange(v)}
              onBlur={onBlur}
            />
          )}
        />
        <HookFormController
          name="code"
          defaultValue=""
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
        {fields.map((field, index) => (
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
