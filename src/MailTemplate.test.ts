import { MailTemplate } from "./MailTemplate";

test("should render html", () => {
  const mail = MailTemplate({
    title: "TITLE",
    body: "<p>BODY</p>",
  });

  expect(mail).toContain("<p>BODY</p>");
});

test("should render text", () => {
  const mail = MailTemplate({
    html: false,
    title: "TITLE",
    body: `BODY`,
  });

  expect(mail).toContain("TITLE");
  expect(mail).toContain("BODY");
});

test("should render action", () => {
  const mail = MailTemplate({
    html: false,
    title: "TITLE",
    body: "BODY",
    action: {
      label: "ACTION",
      href: "HREF",
    },
  });

  expect(mail).toContain("ACTION");
  expect(mail).toContain("HREF");
});

test("should render advanced", () => {
  const username = "Test";
  const url = "hi";
  const mail = MailTemplate({
    html: false,
    title: `Hey ${username},`,
    body: `Wowwee! Thanks for registering an account with OpenPatch! You will be a great addition to our community.\n
    Before we get started, we will need to verify your email.`,
    action: {
      href: url,
      label: "Verify Email",
    },
  });

  expect(mail).toContain("Verify Email");
});
