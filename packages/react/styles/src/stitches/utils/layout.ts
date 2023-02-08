import type * as Stitches from '@stitches/react';

export const layout = {
  d: (value: Stitches.PropertyValue<'display'>) => ({ display: value }),
  h: (value: Stitches.PropertyValue<'height'>) => ({ height: value }),
  maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({ maxHeight: value }),
  maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({ maxWidth: value }),
  minH: (value: Stitches.PropertyValue<'minHeight'>) => ({ minHeight: value }),
  minW: (value: Stitches.PropertyValue<'minWidth'>) => ({ minWidth: value }),
  size: (value: Stitches.PropertyValue<'width'>) => ({ height: value, width: value }),
  w: (value: Stitches.PropertyValue<'width'>) => ({ width: value }),
};
