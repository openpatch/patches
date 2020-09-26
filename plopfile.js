function appendToIndex(plop) {
  return function (path, templatePath) {
    return function (data) {
      // inserts a line into index.js while maintaining alphabetical sort.
      const fs = require("fs");

      templateFile = fs.readFileSync(templatePath, "utf8");
      pathFile = fs.readFileSync(path, "utf8");

      const renderedTemplate = plop.renderString(templateFile, data);

      let imports = pathFile.split("\n").filter(function (i) {
        return i !== "";
      });
      imports = [...imports, renderedTemplate];
      imports.sort();
      imports.push("");

      fs.writeFileSync(path, imports.join("\n"), "utf8");

      return "append to index";
    };
  };
}

module.exports = function (plop) {
  appendToIndex = appendToIndex(plop);
  plop.setGenerator("hook", {
    description: "hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "hook name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}.tsx",
        templateFile: ".plop-templates/hook.hbs",
      },
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}.stories.mdx",
        templateFile: ".plop-templates/hook.stories.hbs",
      },
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}.test.tsx",
        templateFile: ".plop-templates/hook.test.hbs",
      },
      appendToIndex("src/hooks/index.ts", ".plop-templates/hook.index.hbs"),
    ],
  });
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
      appendToIndex("src/index.ts", ".plop-templates/component.index.hbs"),
    ],
  });
};
