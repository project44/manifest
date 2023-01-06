import { filterDOMProps as filterDOMProperties } from '../src';

describe('@project44-manifest/react-utils - filterDOMProps', () => {
  it('should filter non-native props', () => {
    const properties = filterDOMProperties({ className: 'test', foo: true });

    expect(properties.className).toBe('test');
    expect(properties.foo).toBeUndefined();
  });

  it('should support aria attributes', () => {
    const properties = filterDOMProperties({ className: 'test', 'aria-label': 'test' });

    expect(properties.className).toBe('test');
    expect(properties['aria-label']).toBe('test');
  });

  it('should support data attributes', () => {
    const properties = filterDOMProperties({ className: 'test', 'data-testId': 'test' });

    expect(properties.className).toBe('test');
    expect(properties['data-testId']).toBe('test');
  });

  it('should support allowed props', () => {
    const properties = filterDOMProperties({ className: 'test', testProp: 'test' }, new Set(['testProp']));

    expect(properties.className).toBe('test');
    expect(properties.testProp).toBe('test');
  });
});
