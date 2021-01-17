import { Meta, Story } from "@storybook/react/types-6-0";
import { MailTemplate, MailTemplateProps } from "./MailTemplate";

export default {
  title: "Mail/Template",
  argTypes: {},
} as Meta;

const TemplateHTML: Story<MailTemplateProps> = (args) => (
  <iframe
    style={{
      boxSizing: "border-box",
      border: 0,
      height: "100vh",
      overflow: "hidden",
    }}
    width="100%"
    srcDoc={MailTemplate({
      ...args,
    })}
  />
);

export const HTML = TemplateHTML.bind({});
HTML.args = {
  title: "Welcome to OpenPatch",
  body: "Please verify your E-Mail",
  action: {
    href: "#",
    label: "Verify E-Mail",
  },
};

const TemplateText: Story<MailTemplateProps> = (args) => (
  <div style={{ whiteSpace: "pre" }}>{MailTemplate(args)}</div>
);

export const Text = TemplateText.bind({});
Text.args = {
  html: false,
  title: "Welcome to OpenPatch",
  body: "Please verify your E-Mail",
  action: {
    href: "#",
    label: "Verify E-Mail",
  },
};
