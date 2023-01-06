import { render, screen } from '@project44-manifest/react-test-utils';
import { createComponent } from '../src/system';

describe('@project44-manifest/system - createComponent', () => {
  it('should support the as prop', () => {
    const TestComponent = createComponent<{ as?: 'span'; testProp?: string }>(
      (properties, forwardedReference) => {
        const { children, ...other } = properties;

        return (
          <span {...other} ref={forwardedReference} data-testid="test">
            {children}
          </span>
        );
      },
    );

    const { rerender } = render(<TestComponent />);

    expect(screen.getByTestId('test').getAttribute('as')).toBeNull();

    rerender(<TestComponent as="div" />);

    expect(screen.getByTestId('test').getAttribute('as')).toBe('div');
  });

  it('should support forwarding refs', () => {
    const reference = jest.fn();

    const TestComponent = createComponent<{ as?: 'span'; testProp?: string }>(
      (properties, forwardedReference) => {
        const { children, ...other } = properties;

        return (
          <span {...other} ref={forwardedReference} data-testid="test">
            {children}
          </span>
        );
      },
    );

    render(<TestComponent ref={reference} />);

    expect(reference).toHaveBeenCalled();
  });
});
