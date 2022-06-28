<h1 align="center">Manifest Design System</h1>
<p align="center">Manifesting Project 44 experiences through design.</p>
<p align="center">
  <a href="https://github.com/project44/manifest/blob/main/LICENSE">
    <img src="https://img.shields.io/apm/l/atomic-design-ui.svg?style=flat" alt="License">
  </a>
  <a href="https://github.com/project44/manifest/actions/workflows/ci.yaml">
    <img src="https://github.com/project44/manifest/actions/workflows/ci.yaml/badge.svg" alt="CI/CD">
  </a>
</p>

<hr>

## 🟢 Getting Starting

Add the `@project44-manifest/react` package to your project:

With yarn

```bash
yarn add @project44-manifest/react
```

With npm

```bash
npm install @project44-manifest/react
```

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

For more in-depth documentation and usage guidelines please visit our [design system website](https://p44design.systems).

Our storybook instance is hosted via chromatic: [Storybook](https://main--628befdf03d19f004afa4c0b.chromatic.com)

## 🙌 Contributing

Contributions are always welcome!! Please review our [Contribution Guide](/.github/CONTRIBUTING.md) to get started.

## 🚢 Releasing

Releasing is controlled automatically via [changesets](https://github.com/changesets/changesets) in our github workflows.

## License

[MIT](/LICENSE)
