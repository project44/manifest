import { chainCallbacks } from '../../src';

describe('@manifest/react - chainCallbacks', () => {
  it('should chain functions', () => {
    const func1 = jest.fn();
    const func2 = jest.fn();

    const cb = chainCallbacks(func1, func2);

    cb();

    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(1);
  });

  it('should handle non-functions', () => {
    const func1 = jest.fn();
    const func2 = jest.fn();
    const func3 = 'test';

    const cb = chainCallbacks(func1, func2, func3);

    cb();

    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(1);
  });
});
