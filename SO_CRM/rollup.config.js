import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
import json from "@rollup/plugin-json";
import fs from 'fs';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
  (warning.code === 'THIS_IS_UNDEFINED') ||
  onwarn(warning);

export default {
  client: {
    input: config.client.input().replace(/\.js$/, '.ts'),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      svelte({
        preprocess: sveltePreprocess({sourceMap: dev}),
        compilerOptions: {
          dev,
          hydratable: true
        }
      }),
      url({
        sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
        publicPath: '/client/'
      }),
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs(),
      json(),
      typescript({sourceMap: dev}),

      legacy && babel({
        extensions: ['.js', '.mjs', '.html', '.svelte'],
        babelHelpers: 'runtime',
        exclude: ['node_modules/@babel/**'],
        presets: [
          ['@babel/preset-env', {
            targets: '> 0.25%, not dead'
          }]
        ],
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          ['@babel/plugin-transform-runtime', {
            useESModules: true
          }]
        ]
      }),

      !dev && terser({
        module: true
      })
    ],
    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: {server: config.server.input().server.replace(/\.js$/, ".ts")},
    output: config.server.output(),
    plugins: [
      {
        buildStart() {
          const dest = "static/apps";
          const srcApps = "src/apps";
          const read = fs.readdirSync("src/apps").filter(e => !e.includes("."));
          const infoApps = {};
          read.forEach((value, index) => {
            const app = value;
            const route = `src/apps/${app}`;
            const config = require(`./${route}/config.json`);
            const icon = `${route}/${config.icon}`;
            const lastDir = config.icon.split("/")
            lastDir.pop();
            infoApps[app] = config;
            fs.mkdirSync(`${dest}/${app}/${lastDir.join("/")}`, {recursive: true});
            fs.copyFile(icon, `${dest}/${app}/${config.icon}`, (err) => {
              if (err) throw err;
              console.log('source.txt was copied to destination.txt');
            });
          })
          fs.writeFileSync(`${srcApps}/config.json`, JSON.stringify(infoApps));
        },
      },
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      svelte({
        preprocess: sveltePreprocess({sourceMap: dev}),
        compilerOptions: {
          dev,
          generate: 'ssr',
          hydratable: true
        },
        emitCss: false
      }),
      url({
        sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
        publicPath: '/client/',
        emitFiles: false // already emitted by client build
      }),
      resolve({
        dedupe: ['svelte']
      }),
      commonjs(),
      json(),
      typescript({sourceMap: dev})
    ],
    external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),
    preserveEntrySignatures: 'strict',
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input().replace(/\.js$/, '.ts'),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      commonjs(),
      typescript({sourceMap: dev}),
      !dev && terser()
    ],

    preserveEntrySignatures: false,
    onwarn,
  }
};
