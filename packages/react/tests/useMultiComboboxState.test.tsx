import { act } from 'react-dom/test-utils';
import { Item } from '@react-stately/collections';
import { renderHook } from '@project44-manifest/react-test-utils';
import { useMultiComboboxState } from '../src';
import type { MultiComboboxProps as MultiComboboxProperties } from '../src/types';

describe('@project44-manifest/react - useMultiComboboxState', () => {
  describe('items', () => {
    let defaultProps: MultiComboboxProperties<{ key: string; name: string }>;

    beforeEach(() => {
      defaultProps = {
        items: [{ key: 'one', name: 'one' }],
        children: (properties) => <Item {...properties}>{properties.name}</Item>,
      };
    });

    it('should support items', () => {
      const { result } = renderHook((properties) => useMultiComboboxState(properties), {
        initialProps: defaultProps,
      });

      expect(result.current.collection.size).toBe(1);
    });

    it('should support default items', () => {
      const { items, ...other } = defaultProps;
      const initialProperties = { ...other, defaultItems: [{ key: 'one', name: 'one' }] };
      const { result } = renderHook((properties) => useMultiComboboxState(properties), { initialProps: initialProperties });

      expect(result.current.collection.size).toBe(1);
    });

    it('should support children as items', () => {
      const { result } = renderHook((properties) => useMultiComboboxState(properties), {
        initialProps: {
          children: [<Item key="one">One</Item>],
        },
      });

      expect(result.current.collection.size).toBe(1);
    });
  });

  describe('open', () => {
    let defaultProps: MultiComboboxProperties<{ key: string; name: string }>;
    let onOpenChange: MultiComboboxProperties<{ key: string; name: string }>['onOpenChange'];

    beforeEach(() => {
      onOpenChange = jest.fn();

      defaultProps = {
        items: [{ key: 'one', name: 'one' }],
        children: (properties) => <Item {...properties}>{properties.name}</Item>,
        onOpenChange,
      };
    });

    it('should return open and close states', () => {
      const { result } = renderHook((properties) => useMultiComboboxState(properties), {
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
      const { result } = renderHook((properties) => useMultiComboboxState(properties), {
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
      const { result } = renderHook((properties) => useMultiComboboxState(properties), {
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
    let defaultProps: MultiComboboxProperties<{ key: string; name: string }>;
    let onInputChange: MultiComboboxProperties<{ key: string; name: string }>['onInputChange'];

    beforeEach(() => {
      onInputChange = jest.fn();

      defaultProps = {
        items: [{ key: 'one', name: 'one' }],
        children: (properties) => <Item {...properties}>{properties.name}</Item>,
        onInputChange,
      };
    });

    it('should support a blank default value', () => {
      const initialProperties = { ...defaultProps };
      const { result } = renderHook((properties) => useMultiComboboxState(properties), { initialProps: initialProperties });

      expect(result.current.inputValue).toBe('');
      expect(onInputChange).not.toHaveBeenCalled();

      act(() => void result.current.setInputValue('f'));

      expect(result.current.inputValue).toBe('f');
      expect(onInputChange).toHaveBeenCalledWith('f');
    });

    it('should support change events', () => {
      const initialProperties = { ...defaultProps, defaultInputValue: 'foo' };

      const { result } = renderHook((properties) => useMultiComboboxState(properties), { initialProps: initialProperties });

      expect(result.current.inputValue).toBe('foo');
      expect(onInputChange).not.toHaveBeenCalled();

      act(() => void result.current.setInputValue('bar'));

      expect(result.current.inputValue).toBe('bar');
      expect(onInputChange).toHaveBeenCalledWith('bar');
    });
  });

  describe('selection', () => {
    let defaultProps: MultiComboboxProperties<{ key: string; name: string }>;
    let onSelectionChange: MultiComboboxProperties<{ key: string; name: string }>['onSelectionChange'];

    beforeEach(() => {
      onSelectionChange = jest.fn();

      defaultProps = {
        items: [
          { key: 'one', name: 'one' },
          { key: 'two', name: 'two' },
        ],
        children: (properties) => <Item {...properties}>{properties.name}</Item>,
        onSelectionChange,
      };
    });

    it('should support item selection', () => {
      const { result } = renderHook((properties) => useMultiComboboxState(properties), {
        initialProps: defaultProps,
      });

      expect(result.current.selectionManager.selectedKeys.size).toBe(0);

      act(() => void result.current.selectionManager.select('two'));

      expect(onSelectionChange).toHaveBeenCalled();
    });

    it('should support item selection with selectedKeys', () => {
      const initialProperties = { ...defaultProps, selectedKeys: ['one'] };
      const { result } = renderHook((properties) => useMultiComboboxState(properties), { initialProps: initialProperties });

      expect(result.current.selectionManager.selectedKeys.size).toBe(1);

      act(() => void result.current.selectionManager.select('two'));

      expect(onSelectionChange).toHaveBeenCalled();
    });

    it('should support item selection with defaultSelectedKeys', () => {
      const initialProperties = { ...defaultProps, defaultSelectedKeys: ['one'] };
      const { result } = renderHook((properties) => useMultiComboboxState(properties), { initialProps: initialProperties });

      expect(result.current.selectionManager.selectedKeys.size).toBe(1);

      act(() => void result.current.selectionManager.select('two'));

      expect(onSelectionChange).toHaveBeenCalled();
    });
  });
});
