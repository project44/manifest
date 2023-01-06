import { mergeProps as mergeProperties } from '../src';

describe('@project44-manifest/react-utils - mergeProps', () => {
  it('should merge props', () => {
    const role = 'test';
    const id = 'test_id';

    const properties = mergeProperties<
      { id?: string | undefined; role?: string; tabIndex: number | undefined }[]
    >({ role, tabIndex: -1 }, { id, tabIndex: undefined });

    expect(properties.id).toBe(id);
    expect(properties.role).toBe(role);
    expect(properties.tabIndex).toBe(-1);
  });

  it('should merge classNames', () => {
    const properties = mergeProperties({ className: 'test' }, { className: 'test-2' });

    expect(properties.className).toBe('test test-2');
  });

  it('should merge styles', () => {
    const properties = mergeProperties({ style: { backgroundColor: 'grey' } }, { style: { color: 'white' } });

    expect(properties.style).toEqual({ backgroundColor: 'grey', color: 'white' });
  });

  it('should merge callbacks', () => {
    const callbackSpy = jest.fn();
    const message1 = 'click1';
    const message2 = 'click2';

    const properties = mergeProperties(
      {
        onClick: () => callbackSpy(message1),
      },
      {
        onClick: () => callbackSpy(message2),
      },
    );

    properties.onClick();

    expect(callbackSpy).toHaveBeenNthCalledWith(1, message1);
    expect(callbackSpy).toHaveBeenNthCalledWith(2, message2);
    expect(callbackSpy).toHaveBeenCalledTimes(2);
  });
});
