import { Item } from '@react-stately/collections';
import { act, renderHook } from '@testing-library/react';
import { useMultiComboboxState } from '../../..';
import type { MultiComboboxProps } from '../../../types';

describe('@project44-manifest/react - useMultiComboboxState', () => {
  describe('items', () => {
    let defaultProps: MultiComboboxProps<{ key: string; name: string }>;

    beforeEach(() => {
      defaultProps = {
        items: [{ key: 'one', name: 'one' }],
        children: (props) => <Item {...props}>{props.name}</Item>,
      };
    });

    it('should support items', () => {
      const { result } = renderHook((props) => useMultiComboboxState(props), {
        initialProps: defaultProps,
      });

      expect(result.current.collection.size).toBe(1);
    });

    it('should support default items', () => {
      const { items, ...other } = defaultProps;
      const initialProps = { ...other, defaultItems: [{ key: 'one', name: 'one' }] };
      const { result } = renderHook((props) => useMultiComboboxState(props), { initialProps });

      expect(result.current.collection.size).toBe(1);
    });

    it('should support children as items', () => {
      const { result } = renderHook((props) => useMultiComboboxState(props), {
        initialProps: {
          children: [<Item key="one">One</Item>],
        },
      });

      expect(result.current.collection.size).toBe(1);
    });
  });

  describe('open', () => {
    let defaultProps: MultiComboboxProps<{ key: string; name: string }>;
    let onOpenChange: MultiComboboxProps<{ key: string; name: string }>['onOpenChange'];

    beforeEach(() => {
      onOpenChange = jest.fn();

      defaultProps = {
        items: [{ key: 'one', name: 'one' }],
        children: (props) => <Item {...props}>{props.name}</Item>,
        onOpenChange,
      };
    });

    it('should return open and close states', () => {
      const { result } = renderHook((props) => useMultiComboboxState(props), {
        initialProps: defaultProps,
      });

      expect(result.current.isOpen).toBeFalsy();

      act(() => {
        result.current.open();
      });

      expect(result.current.isOpen).toBeTruthy();
      expect(onOpenChange).toHaveBeenCalledWith(true, undefined);

      act(() => {
        result.current.close();
      });

      expect(result.current.isOpen).toBeFalsy();
      expect(onOpenChange).toHaveBeenCalledWith(false, undefined);
    });

    it('should return open and close states with different trigger types', () => {
      const { result } = renderHook((props) => useMultiComboboxState(props), {
        initialProps: defaultProps,
      });

      act(() => {
        result.current.open(undefined, 'focus');
      });

      expect(result.current.isOpen).toBe(true);
      expect(onOpenChange).toHaveBeenCalledWith(true, 'focus');

      act(() => void result.current.close());

      expect(result.current.isOpen).toBe(false);
      expect(onOpenChange).toHaveBeenCalledWith(false, undefined);

      act(() => {
        result.current.open(undefined, 'input');
      });

      expect(result.current.isOpen).toBe(true);
      expect(onOpenChange).toHaveBeenCalledWith(true, 'input');

      act(() => void result.current.close());

      act(() => {
        result.current.open(undefined, 'manual');
      });

      expect(result.current.isOpen).toBe(true);
      expect(onOpenChange).toHaveBeenCalledWith(true, 'manual');
    });

    it('should return open and close states on toggle', () => {
      const { result } = renderHook((props) => useMultiComboboxState(props), {
        initialProps: defaultProps,
      });

      act(() => {
        result.current.toggle(undefined, 'focus');
      });

      expect(result.current.isOpen).toBe(true);
      expect(onOpenChange).toHaveBeenCalledWith(true, 'focus');

      act(() => void result.current.toggle(undefined, 'focus'));

      expect(result.current.isOpen).toBe(false);
      expect(onOpenChange).toHaveBeenCalledWith(false, undefined);

      act(() => {
        result.current.toggle(undefined, 'input');
      });

      expect(result.current.isOpen).toBe(true);
      expect(onOpenChange).toHaveBeenCalledWith(true, 'input');

      act(() => void result.current.close());

      act(() => {
        result.current.toggle(undefined, 'manual');
      });

      expect(result.current.isOpen).toBe(true);
      expect(onOpenChange).toHaveBeenCalledWith(true, 'manual');
    });
  });

  describe('input', () => {
    let defaultProps: MultiComboboxProps<{ key: string; name: string }>;
    let onInputChange: MultiComboboxProps<{ key: string; name: string }>['onInputChange'];

    beforeEach(() => {
      onInputChange = jest.fn();

      defaultProps = {
        items: [{ key: 'one', name: 'one' }],
        children: (props) => <Item {...props}>{props.name}</Item>,
        onInputChange,
      };
    });

    it('should support a blank default value', () => {
      const initialProps = { ...defaultProps };
      const { result } = renderHook((props) => useMultiComboboxState(props), { initialProps });

      expect(result.current.inputValue).toBe('');
      expect(onInputChange).not.toHaveBeenCalled();

      act(() => void result.current.setInputValue('f'));

      expect(result.current.inputValue).toBe('f');
      expect(onInputChange).toHaveBeenCalledWith('f');
    });

    it('should support change events', () => {
      const initialProps = { ...defaultProps, defaultInputValue: 'foo' };

      const { result } = renderHook((props) => useMultiComboboxState(props), { initialProps });

      expect(result.current.inputValue).toBe('foo');
      expect(onInputChange).not.toHaveBeenCalled();

      act(() => void result.current.setInputValue('bar'));

      expect(result.current.inputValue).toBe('bar');
      expect(onInputChange).toHaveBeenCalledWith('bar');
    });
  });

  describe('selection', () => {
    let defaultProps: MultiComboboxProps<{ key: string; name: string }>;
    let onSelectionChange: MultiComboboxProps<{ key: string; name: string }>['onSelectionChange'];

    beforeEach(() => {
      onSelectionChange = jest.fn();

      defaultProps = {
        items: [
          { key: 'one', name: 'one' },
          { key: 'two', name: 'two' },
        ],
        children: (props) => <Item {...props}>{props.name}</Item>,
        onSelectionChange,
      };
    });

    it('should support item selection', () => {
      const { result } = renderHook((props) => useMultiComboboxState(props), {
        initialProps: defaultProps,
      });

      expect(result.current.selectionManager.selectedKeys.size).toBe(0);

      act(() => void result.current.selectionManager.select('two'));

      expect(onSelectionChange).toHaveBeenCalled();
    });

    it('should support item selection with selectedKeys', () => {
      const initialProps = { ...defaultProps, selectedKeys: ['one'] };
      const { result } = renderHook((props) => useMultiComboboxState(props), { initialProps });

      expect(result.current.selectionManager.selectedKeys.size).toBe(1);

      act(() => void result.current.selectionManager.select('two'));

      expect(onSelectionChange).toHaveBeenCalled();
    });

    it('should support item selection with defaultSelectedKeys', () => {
      const initialProps = { ...defaultProps, defaultSelectedKeys: ['one'] };
      const { result } = renderHook((props) => useMultiComboboxState(props), { initialProps });

      expect(result.current.selectionManager.selectedKeys.size).toBe(1);

      act(() => void result.current.selectionManager.select('two'));

      expect(onSelectionChange).toHaveBeenCalled();
    });
  });
});
