## Import

```jsx
import { Button, ButtonGroup, IconButton } from '@project44-manifest/react';
```

## ButtonProps

| Prop        | Type                                                  | Description                               | Default   |
| ----------- | ----------------------------------------------------- | ----------------------------------------- | --------- |
| children    | node                                                  | The content of the button.                |           |
| className?  | string                                                | The classname passed to the root element. |           |
| css?        | object                                                | Theme aware style object.                 |           |
| endIcon?    | node                                                  | Element placed before the children.       |           |
| isDisabled? | boolean                                               | Whether the button is disabled.           |           |
| size?       | 'medium', 'small'                                     | The size of the button.                   | 'medium'  |
| startIcon?  | node                                                  | Element placed after the children.        |           |
| variant?    | 'primary', 'secondary', 'tertiary', 'danger', 'brand' | The display variant of the button.        | 'primary' |
