import { createTheme } from '@project44-manifest/react-styles';
import { render, screen } from '@testing-library/react';
import { Provider } from '../src';

const indigo = createTheme({
  className: 'indigo',
  theme: {},
});

it('should render', () => {
  render(<Provider>test</Provider>);

  expect(screen.getByText('test')).toBeInTheDocument();
});

it('should support theming', () => {
  render(<Provider data-testid="test" theme={indigo} />);

  expect(screen.getByTestId('test').parentElement?.classList.contains('indigo')).toBeTruthy();
});

it('should support nested theming', () => {
  render(
    <Provider data-testid="test">
      test
      <Provider data-testid="nested" theme={indigo}>
        test
      </Provider>
    </Provider>,
  );

  expect(screen.getByTestId('test').classList.contains('manifest-provider')).toBeTruthy();
  expect(screen.getByTestId('nested').parentElement?.classList.contains('indigo')).toBeTruthy();
});
