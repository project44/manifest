<h1 align="center">Manifest Design System</h1>
<p align="center">Manifesting Project 44 experiences through design.</p>
<p align="center">
  <a href="https://github.com/project44/manifest/blob/main/LICENSE">
    <img src="https://img.shields.io/apm/l/atomic-design-ui.svg?style=flat" alt="License">
  </a>
  <a href="https://github.com/project44/manifest/actions/workflows/ci.yml">
    <img src="https://github.com/project44/manifest/actions/workflows/ci.yml/badge.svg" alt="CI/CD">
  </a>
</p>

<hr />

## 🛠️ Installation

```sh
yarn add @project44-manifest/react
```

Check out our [documentation](https://zeroheight.com/27d9b4710/v/latest/p/93d303-developers) for
installation instructions and setup.

### Packages

| Package                               | Version                                                                                                                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **@project44-manifest/design-tokens** | [![badge](https://img.shields.io/npm/v/@project44-manifest/design-tokens.svg?style=flat-square-square)](https://www.npmjs.com/package/@project44-manifest/design-tokens) |
| **@project44-manifest/react**         | [![badge](https://img.shields.io/npm/v/@project44-manifest/react.svg?style=flat-square-square)](https://www.npmjs.com/package/@project44-manifest/react)                 |
| **@project44-manifest/system**        | [![badge](https://img.shields.io/npm/v/@project44-manifest/system.svg?style=flat-square-square)](https://www.npmjs.com/package/@project44-manifest/system)               |
| **@project44-manifest/theme**         | [![badge](https://img.shields.io/npm/v/@project44-manifest/theme.svg?style=flat-square-square)](https://www.npmjs.com/package/@project44-manifest/theme)                 |

## 🏃‍♂️ Quick Start

Initialize the `manifest` provider in the root of your application:

```tsx
import { Provider } from '@project44-manifest/react';

function MyApp() {
  return (
    <Provider>
      <YOUR_APP_COMPONENT />
    </Provider>
  );
}
```

Import a component:

```tsx
import { Button } from '@project44-manifest/react';

function MyComponent() {
  return <Button>My Button</Button>;
}
```

## 📖 Documentation

For full documentation visit our [design system website](https://p44design.systems).

## 🙌 Contributing

Contributions are always welcome!! Please review our [Contribution Guide](/.github/CONTRIBUTING.md)
to get started.

## License

[MIT](/LICENSE)
