# @project44-manifest/react-styles

> A CSS-in-JS styling engine powered by [Stitches](https://stitches.dev).

## Installation

```bash
yarn add @project44-manifest/react-styles
```

## Usage

The `@project44-manifest/react-styles` library ships with a pre-configured styling engine powered by
[Stitches](https://stitches.dev) with support for the Manifest Design System
[theme](../theme/README.md).

### Styled API

The `styled` api can be used to create a component.

> This API is for internal use only, please use our component primitives or `css` prop when working
> with manifest design system components.

```tsx
import { styled } from '@project44-manifest/react-styles';

const Button = styled('button', {
  backgroundColor: '$palette-blue-500',
  borderRadius: '$full',
  color: '$palette-white',
});

<Button>Hello World</Button>;
```

Check out the [Stitches documentation](https://stitches.dev/docs/styling) for complex examples of
styling with Stitches.

### CSS Prop

All components created using this library will include a `css` prop, which can be used to pass in
style overrides.

It’s like the style attribute, but it supports tokens, media queries, nesting and token-aware
values.

```tsx
const Button = styled('button', {});

<Button
  css={{
    backgroundColor: '$palette-blue-500',
    borderRadius: '$full',
    color: '$palette-white',

    '&:hover': {
      backgroundColor: '$palette-blue-700',
    },
  }}
>
  Button
</Button>;
```

Check out the [Stitches documentation](https://stitches.dev/docs/overriding-styles#the-css-prop) for
information regarding the `css` prop.

### Theme Tokens

> Its is highly encouraged to use theme tokens vs. hard coded values as this allows all components
> to inherit any changes made at the theme level.

Check out our [theme specification](../theme/README.md) for a complete list of available theme
tokens.

Check out the [Stitches documentation](https://stitches.dev/docs/tokens) for more information about
theme tokens.

### pxToRem

We encourage using `rem` instead of `px` for your unit of measurement to improve accessibility for
those with visual impairments. To make the conversion from `px` to `rem` easier we have provided a
utility function that will convert those values using a base font size of `16px`.

```tsx
import { css, styled } from '@project44-manifest/react-styles';

const MyComponent = styled('div', {
  padding: pxToRem(64),
});
```

### cx

This library also provides a utility for constructing className strings conditionally.

```tsx
import { cx } from '@project44-manifest/react-styles';

// Strings (variadic)
cx('foo', true && 'bar', 'baz');
//=> 'foo bar baz'

// Objects
cx({ foo: true, bar: false, baz: isTrue() });
//=> 'foo baz'

// Objects (variadic)
cx({ foo: true }, { bar: false }, null, { '--foobar': 'hello' });
//=> 'foo --foobar'

// Arrays
cx(['foo', 0, false, 'bar']);
//=> 'foo bar'

// Arrays (variadic)
cx(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]);
//=> 'foo bar baz hello there'

// Kitchen sink (with nesting)
cx('foo', [1 && 'bar', { baz: false, bat: null }, ['hello', ['world']]], 'cya');
//=> 'foo bar hello world cya'
```

## Contributing

Contributions are always welcome!! Please review our [Contribution Guide](/.github/CONTRIBUTING.md)
to get started.

## License

Licensed under the [MIT](/LICENSE).
