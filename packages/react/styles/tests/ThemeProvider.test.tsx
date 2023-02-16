import { createTheme } from '@project44-manifest/react-styles';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../src';

const indigo = createTheme({
  className: 'indigo',
  theme: {},
});

it('should render', () => {
  render(<ThemeProvider>test</ThemeProvider>);

  expect(screen.getByText('test')).toBeInTheDocument();
});

it('should support theming', () => {
  render(
    <ThemeProvider data-testid="test" theme={indigo}>
      test
    </ThemeProvider>,
  );

  expect(screen.getByTestId('test').classList.contains('indigo')).toBeTruthy();
});

it('should support nested theming', () => {
  render(
    <ThemeProvider data-testid="test">
      test
      <ThemeProvider data-testid="nested" theme={indigo}>
        test
      </ThemeProvider>
    </ThemeProvider>,
  );

  expect(screen.getByTestId('test').classList.contains('manifest-theme-provider')).toBeTruthy();
  expect(screen.getByTestId('nested').classList.contains('indigo')).toBeTruthy();
});
