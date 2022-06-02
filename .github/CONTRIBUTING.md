# Contributing to Manifest

Thank you so much for your interest in contributing to Manifest! Before you begin please take a
moment to review our contribution guidelines.

## Code of Conduct

We believe in providing a safe and positive environment for all contributors and expect all
community members to help maintain that culture. Please review our
[code of conduct](./CODE_OF_CONDUCT.md) to understand our do's and dont's.

## Making a Pull Request

### 1. Fork the repo

Click the `Fork` button in the top-right corner of the
[Manifest Github Repo](https://github.com/project44/manifest).

### 2. Clone your fork

```sh
git clone git@github.com:[username]/manifest.git
cd manifest
```

See [GitHub docs](https://help.github.com/articles/fork-a-repo/) for more details.

### 3. Set the upstream remote

Add the `project44/manifest` repo as your upstream remote:

```sh
git remote add upstream git@github.com:project44/manifest.git
```

### 4. Sync main branches

Synchronize your local `main` branch with the upstream one:

```sh
git checkout main
git pull upstream main
```

### 5. Install dependencies and build packages.

Dependencies are managed with [yarn](https://yarnpkg.com/) (npm, pnpm are not supported).

```sh
yarn install
yarn build
```

### 6. Start the development environment

To see changes start the [storybook](https://storybook.js.org/) development server:

```sh
yarn start
```

You can now access the documentation site [locally](http://localhost:6006).

### 7. Test changes

All commits that fix bugs or add features need a test. Tests can be run for all packages or
individial components:

```sh
# Test all
yarn test

# Test component
yarn test button
```

### 8. Create a new branch

Branch names must consist of: `[type/scope]`, with the type being any of the
[conventional commit types](#type), and scope being a short id describing the work.

Example: `fix/button-styles`

### 9. Commit changes and push

Commit messaged must follow our [commit conventions](#commit-conventions).

Example: `fix: update the button box shadow`

### 10. Create a changeset

Changelogs are automatically managed and produced by
[changesets](https://github.com/changesets/changesets).

```sh
yarn changeset
```

> If you made minor changes like CI config, etc, you can run `yarn changeset add --empty` to
> generate an empty changeset file to document your changes.

### 8. Push changes

```sh
git push -u origin <branch_name>
```

### 11. Open PR

Visit the repo and click the `Compare & pull request` button.

## Commit Conventions

Manifest follows [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for writing
commit messages. This helps in automatically generating changelogs and ensuring our git history is
easily searchable.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

> Commit messages are validated using [commitlint](https://commitlint.js.org/#/).

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies
- **chore**: Changes that do not affect the meaning of the code
- **ci**: Changes to our CI configuration files and scripts
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The
rest of the commit message is then used for this.

## Code style

Manifest uses prettier and eslint and recommends enabling linting in your editor.

### Lint

Checkout the [vessel config](https://github.com/project44/vessel/tree/main/packages/eslint-config)
for more details on which rules are enabled or disabled.

```sh
yarn lint
```

### Format

Checkout the [vessel config](https://github.com/project44/vessel/tree/main/packages/prettier-config)
for formatting options.

```sh
yarn format
```

## License

By contributing your code to the [manifest](https://github.com/project44/manifest) GitHub
repository, you agree to license your contribution under the [MIT license](/LICENSE).
