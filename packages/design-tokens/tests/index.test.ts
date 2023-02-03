import { color, colorPaletteBlue50 } from '../src';

describe('design-tokens', () => {
  it('should return a token constant', () => {
    expect(colorPaletteBlue50).toBe('#ecf4fe');
  });

  it('should return a token group', () => {
    expect(typeof color === 'object').toBeTruthy();
    expect(color.palette.blue[50]).toBe('#ecf4fe');
  });
});
