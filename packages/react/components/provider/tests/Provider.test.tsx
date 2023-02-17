import { createTheme } from '@project44-manifest/react-styles';
import { render, screen } from '@testing-library/react';
import { Provider } from '../src';

const indigo = createTheme({});

it('should render', () => {
  render(<Provider>test</Provider>);

  expect(screen.getByText('test')).toBeInTheDocument();
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

  expect(screen.getAllByText('test')).toHaveLength(2);
});
