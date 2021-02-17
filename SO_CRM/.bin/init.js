import fs from "fs";
import {capitalize} from "../src/functions/capitalize";

const dest = "static/apps";
const srcApps = "src/apps";
const read = fs.readdirSync("src/apps").filter(e => !e.includes("."));
const infoApps = {};
let imports = "";
let appsLinks = "";
read.forEach((value, index) => {
  const app = value;
  const route = `src/apps/${app}`;
  const config = require(`./${route}/config.json`);
  const icon = `${route}/${config.icon}`;
  const lastDir = config.icon.split("/")
  lastDir.pop();
  config.main = "index.svelte";
  infoApps[app] = config;
  imports += `import ${capitalize(app)} from './${app}/index.svelte';\n`;
  appsLinks += `\t${capitalize(app)}: ${capitalize(app)},\n`;
  fs.mkdirSync(`${dest}/${app}/${lastDir.join("/")}`, {recursive: true});
  const destDirectory = `${dest}/${app}/${config.icon}`;
  fs.copyFile(icon, destDirectory, (err) => {
    if (err) throw err;
    console.log(`${icon}' was copied to ${destDirectory}`);
  });
})
fs.writeFileSync(`${srcApps}/config.json`, JSON.stringify(infoApps));
const template = `
<script>
${imports}
export let app;
export const appsLings = {
${appsLinks}
}
</script>
{#if app}
  <svelte:component this="{appsLings[app]}"/>
{/if}
            `;
fs.writeFileSync(`${srcApps}/index.svelte`, template);
