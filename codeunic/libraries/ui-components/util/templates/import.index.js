module.exports = (componentName) => ({
    content: `import ${componentName} from "./${componentName}/${componentName}";
export {${componentName}}\n`,
    extension: '.ts'
});