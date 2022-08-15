import { filterDOMProps } from './filterDOMProps';

describe('@project44-manifest/react - filterDOMProps', () => {
  it('should return DOM props', () => {
    const result = filterDOMProps<React.HTMLAttributes<HTMLDivElement>>('div', {
      'aria-label': 'test',
      className: 'test-class',
      onClick: () => {
        // noop
      },
      'data-testid': 'test',
      variant: 'test',
    });

    expect(result['aria-label']).toBe('test');
    expect(result.className).toBe('test-class');
    expect((result as any).variant).toBeUndefined();
    expect((result as any)['data-testid']).toBe('test');
    expect(typeof result.onClick).toBe('function');
  });

  it('should support excluding props', () => {
    const result = filterDOMProps<React.HTMLAttributes<HTMLDivElement>>(
      'div',
      {
        'aria-label': 'test',
        className: 'test-class',
      },
      ['className'],
    );

    expect(result['aria-label']).toBe('test');
    expect(result.className).toBeUndefined();
  });
});
