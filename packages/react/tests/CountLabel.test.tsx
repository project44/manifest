import { render, screen } from '@testing-library/react';
import { CountLabel } from '../src/components/NavigationTabs/CountLabel/index';

describe('counter', () => {
  it('should render', () => {
    const testId = 'counter-pill';
    const counterValue = 12;
    render(<CountLabel value={counterValue} />);
    const counter = screen.getByTestId(testId);
    expect(counter).toBeVisible();
    expect(counter).toHaveTextContent(counterValue.toString());
  });
});
