require("colors");
const fs = require("fs");
const templates = require("./templates");
const importIndex = require("./templates/import.index");

const componentName = process.argv[2];
const componentDir = process.argv[3] || "components";
if (!componentName) {
    console.error("Please supply a valid component name".red);
    process.exit(1);
}

console.log("Creating Component Templates with name: " + componentName);
const directory = `./src/${componentDir}/`;
const componentDirectory = `${directory}${componentName}`;

if (fs.existsSync(componentDirectory)) {
    console.error(`Component ${componentName} already exists.`.red);
    process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
    fs.writeFileSync(
        `${componentDirectory}/${componentName}${template.extension}`,
        template.content
    );
});
fs.appendFileSync(
    `${directory}index.ts`,
    importIndex(componentName).content
);
console.log(
    "Successfully created component under: " + componentDirectory.green
);