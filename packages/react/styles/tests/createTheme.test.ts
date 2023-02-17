import { createTheme } from '../src';

it('should create a theme', () => {
  const theme = createTheme({
    colors: {
      'background-primary': 'pink',
    },
  });

  expect(theme.colors?.['background-primary'].value).toBe('pink');
});
