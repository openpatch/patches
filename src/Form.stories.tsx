import { Story, Meta } from "@storybook/react/types-6-0";
import { useForm, Controller } from "react-hook-form";

import { Form, FormProps } from "./Form";
import { NumberInput } from "./NumberInput";
import { Group } from "./Group";
import { Checkbox } from "./Checkbox";
import { FormFooter } from "./FormFooter";
import { FormHeader } from "./FormHeader";
import { FormDescription } from "./FormDescription";
import { FormLabel } from "./FormLabel";
import { Slider } from "./Slider";
import { FormHelperText } from "./FormHelperText";
import { FormErrorText } from "./FormErrorText";

export default {
  title: "Form/Form",
  component: Form,
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
  checks: {
    check1: boolean;
    check2: boolean;
  };
  number1: number;
  slider1: number;
};

const Template: Story<FormProps> = ({ onSubmit, onError }) => {
  const {
    handleSubmit,
    control,
    formState: { isDirty, isValid, isSubmitting, errors },
  } = useForm<FormData>({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  function handleError(errors) {
    onError(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, handleError)}>
      <FormHeader>An Example Form</FormHeader>
      <FormDescription>
        Commodi veniam atque iusto. Eveniet aut veritatis doloribus. Accusantium
        ad officia similique et aperiam quia minus aut. Inventore aut accusamus
        sit minus voluptatem. Quis rerum sed odio eius. Aut consectetur error
        reiciendis tempora nisi dolorem mollitia voluptatem.
      </FormDescription>
      <Group label="Checkboxes">
        <Controller
          name="checks.check1"
          control={control}
          defaultValue={false}
          render={(props) => (
            <Checkbox onChange={(v) => props.onChange(v)} checked={props.value}>
              Checkbox 1
            </Checkbox>
          )}
        />
        <Controller
          name="checks.check2"
          control={control}
          defaultValue={false}
          render={(props) => (
            <Checkbox onChange={(v) => props.onChange(v)} checked={props.value}>
              Checkbox 2
            </Checkbox>
          )}
        />
      </Group>
      <FormLabel htmlFor="number1">Check 2</FormLabel>
      <Controller
        name="number1"
        control={control}
        defaultValue={0}
        rules={{
          validate: {
            number: (v) => !Number.isNaN(v) || "is not a number",
          },
        }}
        render={(props) => (
          <NumberInput
            id="number1"
            error={errors.number1 ? true : false}
            value={props.value}
            onChange={props.onChange}
          />
        )}
      />
      <FormHelperText>A helper text</FormHelperText>
      <FormLabel htmlFor="slider1" required={true}>
        Slider 1
      </FormLabel>
      <Controller
        name="slider1"
        control={control}
        defaultValue={0}
        rules={{
          validate: {
            greaterThan5: (v) => v > 5 || "needs to be greater than 5",
          },
        }}
        render={(props) => (
          <Slider id="slider1" value={props.value} onChange={props.onChange} />
        )}
      />
      <FormHelperText>A helper text</FormHelperText>
      {errors.slider1?.type === "greaterThan5" && (
        <FormErrorText>Your input needs to be greater than 5.</FormErrorText>
      )}
      <FormFooter disabled={!isDirty || isSubmitting} />
    </Form>
  );
};

export const ReactHookForm = Template.bind({});
