# Node typescript template

## Description

A simple template to start your `node` + `typescript` application from. \
It supports `source maps` and `path aliases` 

## Dev info

Entry point is `src/app.ts` \
Compiled to the `dist` directory

Path aliases are defined in [tsconfig.json](tsconfig.json) file (`path` property) and in [package.json](package.json) file (`_moduleAliases` property)

## Commands

- Install dependencies: `yarn` / `npm i`
- Build: `yarn build` / `npm run build`
- Start: `yarn start` / `npm run start`
- Build and start: `yarn bns` / `npm run bns` \
**Note:** On windows only works with` powershell 7 preview 5+` or under `WSL`
