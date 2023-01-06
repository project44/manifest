import { Callback, mergeCallbacks } from '../src';

describe('@project44-manifest/react-utils - mergeCallbacks', () => {
  it('should merge functions', () => {
    const function1 = jest.fn();
    const function2 = jest.fn();

    const callback = mergeCallbacks(function1, function2);

    callback?.();

    expect(function1).toHaveBeenCalledTimes(1);
    expect(function2).toHaveBeenCalledTimes(1);
  });

  it('should handle non-functions', () => {
    const function1 = jest.fn();
    const function2 = jest.fn();
    const function3 = 'test';

    const callback = mergeCallbacks(function1, function2, function3 as unknown as Callback<any>);

    callback?.();

    expect(function1).toHaveBeenCalledTimes(1);
    expect(function2).toHaveBeenCalledTimes(1);
  });
});
