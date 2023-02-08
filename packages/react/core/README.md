# @project44-manifest/react

> A react library consisting of components, patterns and a styling engine that implement the design
> principles of the [Manifest Design System](https://www.manifestdesignsystem.com) by project44.

## Installation

```bash
yarn add @project44-manifest/react react react-dom
```

## Usage

The `@project44-manifest/react` library includes everything you need to build experiences leveraging
the Manifest Design System.

To start using the library start by wrapper you application with the `Provider`.

```tsx
import { Provider } from '@project44-manifest/react';

function MyApp({ children }) {
  return <Provider>{children}</Provider>;
}
```

This provider will initialize our `SSRProvider`, which ensures that our auto-generated id's are
consistent between the server and client. It also initializes the `OverlayProvider` that manages
overlay elements ensuring that they properly hidden from screen readers.

### Font

Manifest Design System was designed using [Inter](https://rsms.me/inter/) as its font. Please be
sure to include the font type in the <head> of your application's HTML.

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
```

### Icons

Currently Manifest Design System uses material design icons. Please be sure to include the font type
in the <head> of your application's HTML.

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
```

### Accessibility

Manifest is built with accessibility in mind, each component will assign the correct events and aria
attributes needed to meet the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/) guidelines. We rely
heavily on [react-aria](https://react-spectrum.adobe.com/react-aria/index.html) for provide
accessible UI primitives.

### Polymorphism

All Manifest components are polymorphic, meaning that each component can be rendered using a
different element or node using the `as` prop.

```tsx
import { Button } from '@project44-manifest/react';

<Button as="span" />;
```

> This should be used sparingly though, as Manifest automatically appends all the necessary
> aria-attributes to an element.

### Styling

Each component is built to the specification of the design system and generally should not need
styles overridden. Overriding component styles create visual discrepancies across our products as
well as makes it harder to maintain components when changes are made at the system level.

If you find yourself needing to override the component's styles, it is best to use the css prop as
it’s like the style attribute, but it supports tokens, media queries, nesting, and token-aware
values.

Checkout the [`@project44-manifest/react-styles`](../react-styles/README.md#css-prop) library for
usage guidelines.

### Composing components

If you are composing a new component you have two options: the `Box` component, or the `styled` api.

#### Box

The Box component functions like any other component in the system, supporting the css prop and the
polymorphic as prop. We suggest composing components this way purely from a consistency standpoint.
Manifest components with style overrides should use the css prop, so new components composed with
the Box component will also use the css prop. This make code scanning easier as engineers and tools
can all look for that prop to infer the styling.

```tsx
import { Box } from '@project44-manifest/react';

function MyComponent() {
  return (
    <Box as="span" css={{ color: '$palette-grey-100' }}>
      {' '}
      Hello World
    </Box>
  );
}
```

#### Styled

If you prefer the styled component syntax, you can use the provided `styled` api.

```tsx
import { styled } from '@project44-manifest/react-styles';

const Button = styled('button', {
  backgroundColor: '$palette-blue-500',
  borderRadius: '$full',
  color: '$palette-white',
});

<Button>Hello World</Button>;
```

The styled api support usage of theme tokens just like the css prop.

If you need to compose your own components utilizing the design system in react we recommend using
the polymorphic `Box` component. The `Box` component ships with support for the `css` and `as`
props, allowing you to quickly and easily build custom components that follow Manifest Design
System.

```tsx
import { Box } from '@project44-manifest/react';

function MyComponent() {
  return (
    <Box as="span" css={{ color: '$palette-grey-100' }}>
      Hello World
    </Box>
  );
}
```

Along with the `Box`, Manifest provides a robust set of layout primitives that can be used to
control layout and composing components.

These primitives include a `Container`, `Flex`, `Grid`, and `Stack` component.

Please refer the the [documentation website](https://www.manifestdesignsystem.com/docs/components)
for usage information and best practices.

## Contributing

Contributions are always welcome!! Please review our [Contribution Guide](/.github/CONTRIBUTING.md)
to get started.

## License

Licensed under the [MIT](/LICENSE).
