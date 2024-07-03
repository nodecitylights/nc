# TypeScript Template

This repository template makes it easier to create a new NPM library, package or application using Node.js and TypeScript. It comes with several developer tools pre-configured and ready to use, so it's easier to get started.

## Features

- [x] [Node.js](https://nodejs.org/) and latest [TypeScript](https://www.typescriptlang.org/) support
- [x] Continuous integration with [GitHub Actions](https://github.com/features/actions)
- [x] Auto-bundled, minified source code with [Vite](https://vitejs.dev/)
- [x] Unit testing and code coverage with [Vitest](https://vitest.dev/) framework
- [x] Auto-generated documentation for TypeScript code with [TypeDoc](https://typedoc.org/)
- [x] Auto-formatted and linted code with [ESLint](https://eslint.org/)
- [x] Dependency updates with [Dependabot](https://github.com/dependabot)

## Getting started

### Creating a new repository

#### GitHub UI

You can create a new repository based on this template by clicking the "Use this template" button in the top-right corner of this page.

#### Terminal

You can run the following command below with the [GitHub CLI](https://cli.github.com/). Some notes:

- Replace placeholder with name of your extension in upper CamelCase
- Configure your repository's visibility with `--public`, `--private`, or `--internal`

```shell
gh repo create {{package}} --public --clone --template neoncitylights/typescript
```

### Cookiecutter stuff

Using your favorite text editor or IDE, find-and-replace the following placeholders:

- `@author/package`: Replace this with the name of your package. This can be scoped under a user/organization (e.g `@samantha/my-really-cool-package`). **Note**: This placeholder is different than the others to avoid warnings from the NPM client.
- `{{author}}`: Replace this with your GitHub/npm username, or the name of your organization.
- `{{package}}`: Replace this with the name of your library.
- `{{desc}}`: Replace this with a short description of your library.

## Publishing a package

if you haven't authenticated with the NPM CLI already, you'll need to do that first by running [`npm adduser`](https://docs.npmjs.com/cli/v9/commands/npm-adduser) in the terminal.

- To publish a non-scoped package (e.g `my-cool-package`), run `npm publish`
- To publish a [scoped package](https://docs.npmjs.com/cli/v9/using-npm/scope) (e.g `@namespace/my-cool-package`), pass the `--access` flag, which must be either `public` or `private`. For example:

  ```shell
  npm publish --access public
  ```

> [!NOTE]
> To publish a private package on NPM, you must have [npm Pro](https://www.npmjs.com/products/pro).

### GitHub Actions

For your CI environment (when using GitHub Actions), you'll need to set the `NPM_TOKEN` environment variable to the value of your NPM token. You can find this by running `npm token list` in the terminal, and create a token by running `npm token create`.

To add your token to your repository:

1. Go to Settings > Security (Secrets and Variables) > Actions
2. Press "New repository secret" button
3. Enter `NPM_TOKEN` as the name of the secret
4. Copy and paste the token value
5. Press "Add secret" button

## Configure

### NPM scripts

NPM has core commands that can be overriden by package authors. I've tried to make this as zero-config as possible, so its likely you won't need to change them any further. These commands are:

- [`prepare`](https://docs.npmjs.com/cli/v8/using-npm/scripts#life-cycle-scripts)
- [`prepublishOnly`](https://docs.npmjs.com/cli/v8/using-npm/scripts#life-cycle-scripts)

These are the most relevant commands that you'll likely use:

| Command | Description |
| ------- | ----------- |
| `npm run build` | Build the library for distributing |
| `npm run docs` | Generate documentation |
| `npm run docs-watch` | Generate documentation in watch mode|
| `npm run clean` | Remove all generated files |
| `npm run reinstall` | Cleans and reinstalls dependencies |
| `npm run lint` | Check for linting errors |
| `npm run lint-fix` | Fix linting errors |
| `npm run test` | Run unit tests |
| `npm run test-ci` | Run unit tests in CI mode |
| `npm run test-ui` | Run unit tests in UI/browser mode |
| `npm run test-watch` | Run unit tests in watch mode |

### Developer tools

| Tool | File | Documentation |
| ---- | ---- | ------------- |
| NPM package | [`package.json`](package.json) | [docs](https://docs.npmjs.com/cli/v10/configuring-npm/package-json), [website](https://docs.npmjs.com/) |
| TypeDoc (documentation generator) | [`package.json`](package.json) (`typedocOptions`) | [docs](https://typedoc.org/options/configuration/), [website](https://typedoc.org/) |
| TypeScript | [`packages/tsconfig.json`](packages/tsconfig.json) | [docs](https://www.typescriptlang.org/tsconfig), [website](https://www.typescriptlang.org/) |
| ESLint (code formatter + linter) | [`eslint.config.js`](./eslint.config.js) | [docs](https://eslint.org/docs/latest/use/configure/), [website](https://eslint.org/) |
| Vite (bundler) | [`vite.config.ts`](packages/pkg1/vite.config.ts) | [docs](https://vitejs.dev/config/), [website](https://vitejs.dev/) |
| Vitest (testing framework) | [`vite.config.ts`](packages/pkg1/vite.config.ts) (`test`) | [docs](https://vitest.dev/config/), [website](https://vitest.dev/) |
| Vitest workspace | [`vitest.workspace.ts`](./vitest.workspace.ts) | [docs](https://vitest.dev/guide/workspace.html#workspace) |
| Dependabot | [`.github/dependabot.yml`](./.github/dependabot.yml) | [docs](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file), [website](https://github.com/dependabot) |

## License

This software is licensed under the MIT license ([`LICENSE-MIT`](./LICENSE) or <https://opensource.org/license/mit/>).

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the MIT license, shall be licensed as above, without any additional terms or conditions.
