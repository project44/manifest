import type * as Stitches from '@stitches/react';
import { color } from '../src/stitches/utils';

describe('react-styles - color utils', () => {
  it('should support backgroundColor alias', () => {
    const mixin = color.bgColor('black' as unknown as Stitches.PropertyValue<'backgroundColor'>);

    expect(mixin).toHaveProperty('backgroundColor');
  });
});
