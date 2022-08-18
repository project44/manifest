import { baseTheme } from './base';

describe('@project-manifest/theme - baseTheme', () => {
  it('should return a theme object', () => {
    expect(baseTheme).toBeInstanceOf(Object);
  });
});
