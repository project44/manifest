import type * as Stitches from '@stitches/react';
import { space } from './space';

describe('@project44-manifest/react - space', () => {
  it('should support margin alias', () => {
    const mixin = space.m('4px' as unknown as Stitches.PropertyValue<'margin'>);

    expect(mixin).toHaveProperty('margin');
  });

  it('should support margin bottom alias', () => {
    const mixin = space.mb('4px' as unknown as Stitches.PropertyValue<'marginBottom'>);

    expect(mixin).toHaveProperty('marginBottom');
  });

  it('should support margin left alias', () => {
    const mixin = space.ml('4px' as unknown as Stitches.PropertyValue<'marginLeft'>);

    expect(mixin).toHaveProperty('marginLeft');
  });

  it('should support margin right alias', () => {
    const mixin = space.mr('4px' as unknown as Stitches.PropertyValue<'marginRight'>);

    expect(mixin).toHaveProperty('marginRight');
  });

  it('should support margin top alias', () => {
    const mixin = space.mt('4px' as unknown as Stitches.PropertyValue<'marginTop'>);

    expect(mixin).toHaveProperty('marginTop');
  });

  it('should support margin left and right alias', () => {
    const mixin = space.mx('4px' as unknown as Stitches.PropertyValue<'marginLeft'>);

    expect(mixin).toHaveProperty('marginLeft');
    expect(mixin).toHaveProperty('marginRight');
  });

  it('should support margin top and bottom alias', () => {
    const mixin = space.my('4px' as unknown as Stitches.PropertyValue<'marginTop'>);

    expect(mixin).toHaveProperty('marginTop');
    expect(mixin).toHaveProperty('marginBottom');
  });

  it('should support padding alias', () => {
    const mixin = space.p('4px' as unknown as Stitches.PropertyValue<'padding'>);

    expect(mixin).toHaveProperty('padding');
  });

  it('should support padding bottom alias', () => {
    const mixin = space.pb('4px' as unknown as Stitches.PropertyValue<'paddingBottom'>);

    expect(mixin).toHaveProperty('paddingBottom');
  });

  it('should support padding left alias', () => {
    const mixin = space.pl('4px' as unknown as Stitches.PropertyValue<'paddingLeft'>);

    expect(mixin).toHaveProperty('paddingLeft');
  });

  it('should support padding right alias', () => {
    const mixin = space.pr('4px' as unknown as Stitches.PropertyValue<'paddingRight'>);

    expect(mixin).toHaveProperty('paddingRight');
  });

  it('should support padding top alias', () => {
    const mixin = space.pt('4px' as unknown as Stitches.PropertyValue<'paddingTop'>);

    expect(mixin).toHaveProperty('paddingTop');
  });

  it('should support padding left and right alias', () => {
    const mixin = space.px('4px' as unknown as Stitches.PropertyValue<'paddingLeft'>);

    expect(mixin).toHaveProperty('paddingLeft');
    expect(mixin).toHaveProperty('paddingRight');
  });

  it('should support padding top and bottom alias', () => {
    const mixin = space.py('4px' as unknown as Stitches.PropertyValue<'paddingTop'>);

    expect(mixin).toHaveProperty('paddingTop');
    expect(mixin).toHaveProperty('paddingBottom');
  });
});
