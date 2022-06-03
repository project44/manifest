import { mergeProps } from '../../src';

describe('@manifest/react - mergeProps', () => {
  it('should merge props', () => {
    const className = 'test-class';
    const id = 'test_id';

    const props = mergeProps({ className }, { id });

    expect(props.className).toBe(className);
    expect(props.id).toBe(id);
  });

  it('should merge styles', () => {
    const props = mergeProps({ style: { backgroundColor: 'grey' } }, { style: { color: 'white' } });

    expect(props.style).toEqual({ backgroundColor: 'grey', color: 'white' });
  });

  it('should merge callbacks', () => {
    const callbackSpy = jest.fn();
    const message1 = 'click1';
    const message2 = 'click2';

    const props = mergeProps(
      {
        onClick: () => {
          void callbackSpy(message1);
        },
      },
      {
        onClick: () => {
          void callbackSpy(message2);
        },
      },
    );

    props.onClick();

    expect(callbackSpy).toHaveBeenNthCalledWith(1, message1);
    expect(callbackSpy).toHaveBeenNthCalledWith(2, message2);
    expect(callbackSpy).toHaveBeenCalledTimes(2);
  });
});
