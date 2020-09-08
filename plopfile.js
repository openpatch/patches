module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{properCase name}}.tsx",
        templateFile: ".plop-templates/component.hbs",
      },
      {
        type: "add",
        path: "src/{{properCase name}}.stories.tsx",
        templateFile: ".plop-templates/component.stories.hbs",
      },
      {
        type: "add",
        path: "src/{{properCase name}}.test.tsx",
        templateFile: ".plop-templates/component.test.hbs",
      },
    ],
  });
};
