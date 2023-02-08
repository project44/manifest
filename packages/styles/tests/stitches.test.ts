import { lightTheme } from '@project44-manifest/theme';
import type * as Stitches from '@stitches/react';
import { config, createStitchesTheme } from '../src';
import { VariantToken } from '../src/stitches/utils/typography';

describe('stitches', () => {
  it('should create stitches theme', () => {
    const theme = createStitchesTheme({
      ...lightTheme,
      colors: {
        ...lightTheme.colors,
        background: { ...lightTheme.colors.background, primary: 'pink' },
      },
    });

    expect(theme.colors?.['background-primary']).toBe('pink');
  });

  it('should support backgroundColor alias', () => {
    const mixin = config.utils.bgColor(
      'black' as unknown as Stitches.PropertyValue<'backgroundColor'>,
    );

    expect(mixin).toHaveProperty('backgroundColor');
  });

  it('should support display alias', () => {
    const mixin = config.utils.d('block' as unknown as Stitches.PropertyValue<'display'>);

    expect(mixin).toHaveProperty('display');
  });

  it('should support height alias', () => {
    const mixin = config.utils.h('100%' as unknown as Stitches.PropertyValue<'height'>);

    expect(mixin).toHaveProperty('height');
  });

  it('should support max height alias', () => {
    const mixin = config.utils.maxH('100%' as unknown as Stitches.PropertyValue<'maxHeight'>);

    expect(mixin).toHaveProperty('maxHeight');
  });

  it('should support max width alias', () => {
    const mixin = config.utils.maxW('100%' as unknown as Stitches.PropertyValue<'maxWidth'>);

    expect(mixin).toHaveProperty('maxWidth');
  });

  it('should support min height alias', () => {
    const mixin = config.utils.minH('100%' as unknown as Stitches.PropertyValue<'minHeight'>);

    expect(mixin).toHaveProperty('minHeight');
  });

  it('should support min width alias', () => {
    const mixin = config.utils.minW('100%' as unknown as Stitches.PropertyValue<'minWidth'>);

    expect(mixin).toHaveProperty('minWidth');
  });

  it('should support size alias', () => {
    const mixin = config.utils.size('100%' as unknown as Stitches.PropertyValue<'width'>);

    expect(mixin).toHaveProperty('height');
    expect(mixin).toHaveProperty('width');
  });

  it('should support width alias', () => {
    const mixin = config.utils.w('100%' as unknown as Stitches.PropertyValue<'width'>);

    expect(mixin).toHaveProperty('width');
  });

  it('should support margin alias', () => {
    const mixin = config.utils.m('4px' as unknown as Stitches.PropertyValue<'margin'>);

    expect(mixin).toHaveProperty('margin');
  });

  it('should support margin bottom alias', () => {
    const mixin = config.utils.mb('4px' as unknown as Stitches.PropertyValue<'marginBottom'>);

    expect(mixin).toHaveProperty('marginBottom');
  });

  it('should support margin left alias', () => {
    const mixin = config.utils.ml('4px' as unknown as Stitches.PropertyValue<'marginLeft'>);

    expect(mixin).toHaveProperty('marginLeft');
  });

  it('should support margin right alias', () => {
    const mixin = config.utils.mr('4px' as unknown as Stitches.PropertyValue<'marginRight'>);

    expect(mixin).toHaveProperty('marginRight');
  });

  it('should support margin top alias', () => {
    const mixin = config.utils.mt('4px' as unknown as Stitches.PropertyValue<'marginTop'>);

    expect(mixin).toHaveProperty('marginTop');
  });

  it('should support margin left and right alias', () => {
    const mixin = config.utils.mx('4px' as unknown as Stitches.PropertyValue<'marginLeft'>);

    expect(mixin).toHaveProperty('marginLeft');
    expect(mixin).toHaveProperty('marginRight');
  });

  it('should support margin top and bottom alias', () => {
    const mixin = config.utils.my('4px' as unknown as Stitches.PropertyValue<'marginTop'>);

    expect(mixin).toHaveProperty('marginTop');
    expect(mixin).toHaveProperty('marginBottom');
  });

  it('should support padding alias', () => {
    const mixin = config.utils.p('4px' as unknown as Stitches.PropertyValue<'padding'>);

    expect(mixin).toHaveProperty('padding');
  });

  it('should support padding bottom alias', () => {
    const mixin = config.utils.pb('4px' as unknown as Stitches.PropertyValue<'paddingBottom'>);

    expect(mixin).toHaveProperty('paddingBottom');
  });

  it('should support padding left alias', () => {
    const mixin = config.utils.pl('4px' as unknown as Stitches.PropertyValue<'paddingLeft'>);

    expect(mixin).toHaveProperty('paddingLeft');
  });

  it('should support padding right alias', () => {
    const mixin = config.utils.pr('4px' as unknown as Stitches.PropertyValue<'paddingRight'>);

    expect(mixin).toHaveProperty('paddingRight');
  });

  it('should support padding top alias', () => {
    const mixin = config.utils.pt('4px' as unknown as Stitches.PropertyValue<'paddingTop'>);

    expect(mixin).toHaveProperty('paddingTop');
  });

  it('should support padding left and right alias', () => {
    const mixin = config.utils.px('4px' as unknown as Stitches.PropertyValue<'paddingLeft'>);

    expect(mixin).toHaveProperty('paddingLeft');
    expect(mixin).toHaveProperty('paddingRight');
  });

  it('should support padding top and bottom alias', () => {
    const mixin = config.utils.py('4px' as unknown as Stitches.PropertyValue<'paddingTop'>);

    expect(mixin).toHaveProperty('paddingTop');
    expect(mixin).toHaveProperty('paddingBottom');
  });

  it('should support typography alias', () => {
    const mixin = config.utils.typography('$display' as VariantToken);

    expect(mixin).toHaveProperty('fontFamily');
    expect(mixin).toHaveProperty('fontSize');
    expect(mixin).toHaveProperty('fontWeight');
    expect(mixin).toHaveProperty('letterSpacing');
    expect(mixin).toHaveProperty('lineHeight');
  });
});
