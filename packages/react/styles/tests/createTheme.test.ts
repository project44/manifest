import { createTheme } from '../src';

it('should create a theme', () => {
  const theme = createTheme({
    theme: {
      colors: {
        'background-primary': 'pink',
      },
    },
  });

  expect(theme.colors?.['background-primary']).toBe('pink');
});
