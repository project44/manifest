import { OverlayProvider } from '@react-aria/overlays';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { MultiCombobox, SelectItem, SelectSection } from '../../..';

describe('@project44-manifest/react - MultiCombobox', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();

    act(() => {
      jest.runAllTimers();
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('render', () => {
    it('should render correctly', () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select">
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
            <SelectSection title="Section">
              <SelectItem key="dog">Dog</SelectItem>
            </SelectSection>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      expect(combobox).toHaveAttribute('autoCorrect', 'off');
      expect(combobox).toHaveAttribute('spellCheck', 'false');
      expect(combobox).toHaveAttribute('autoComplete', 'off');

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-haspopup', 'listbox');

      const label = screen.getAllByText('Select')[0];
      expect(label).toBeVisible();
    });
  });

  describe('open', () => {
    it('should show all items', () => {
      const onOpenChange = jest.fn();

      render(
        <OverlayProvider>
          <MultiCombobox defaultInputValue="hsdjhnkjfd" label="Select" onOpenChange={onOpenChange}>
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const trigger = screen.getByRole('button');

      fireEvent.mouseDown(trigger);
      fireEvent.mouseUp(trigger);
      fireEvent.click(trigger);

      act(() => {
        jest.runAllTimers();
      });

      expect(onOpenChange).toHaveBeenCalledWith(true, 'manual');

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeVisible();
    });

    it('should open on focus', () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select" menuTrigger="focus">
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      act(() => {
        combobox.focus();
      });

      act(() => {
        jest.runAllTimers();
      });

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeVisible();
    });

    it('should open via ArrowDown key down', () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select">
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      act(() => {
        combobox.focus();
      });

      fireEvent.keyDown(combobox, { key: 'ArrowDown', code: 40, charCode: 40 });
      fireEvent.keyUp(combobox, { key: 'ArrowDown', code: 40, charCode: 40 });

      act(() => {
        jest.runAllTimers();
      });

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeVisible();
    });

    it('should open via ArrowUp key down', () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select">
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      act(() => {
        combobox.focus();
      });

      fireEvent.keyDown(combobox, { key: 'ArrowUp', code: 38, charCode: 38 });
      fireEvent.keyUp(combobox, { key: 'ArrowUp', code: 38, charCode: 38 });

      act(() => {
        jest.runAllTimers();
      });

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeVisible();
    });

    it('should open list on user input', () => {
      const onOpenChange = jest.fn();

      render(
        <OverlayProvider>
          <MultiCombobox label="Select" onOpenChange={onOpenChange}>
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      act(() => {
        combobox.focus();
      });

      expect(onOpenChange).not.toHaveBeenCalled();

      fireEvent.change(combobox, { target: { value: 'a' } });

      expect(onOpenChange).toHaveBeenCalledWith(true, 'input');

      act(() => {
        jest.runAllTimers();
      });

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeVisible();
    });
  });

  describe('close', () => {
    it('should close when clicked outside', () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select">
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const trigger = screen.getByRole('button');

      expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');

      fireEvent.click(trigger);

      const listbox = screen.getByRole('listbox');

      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(trigger).toHaveAttribute('aria-controls', listbox.id);

      fireEvent.mouseDown(document.body);
      fireEvent.mouseUp(document.body);
      fireEvent.click(document.body);

      act(() => {
        jest.runAllTimers();
      });

      expect(listbox).not.toBeInTheDocument();

      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).not.toHaveAttribute('aria-controls');
    });

    it('should close on Escape key down', () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select">
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const trigger = screen.getByRole('button');

      expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');

      fireEvent.click(trigger);

      const listbox = screen.getByRole('listbox');

      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(trigger).toHaveAttribute('aria-controls', listbox.id);

      fireEvent.keyDown(listbox, { key: 'Escape' });

      act(() => {
        jest.runAllTimers();
      });

      expect(listbox).not.toBeInTheDocument();

      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).not.toHaveAttribute('aria-controls');
    });
  });

  describe('value', () => {
    it('should reset the input value on escape key down', () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select">
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      act(() => {
        combobox.focus();
      });

      fireEvent.change(combobox, { target: { value: 'Kan' } });

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeVisible();

      fireEvent.keyDown(combobox, { key: 'Escape' });
      fireEvent.keyUp(combobox, { key: 'Escape' });

      act(() => {
        jest.runAllTimers();
      });

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should reset the input value on escape key down and custom value', () => {
      render(
        <OverlayProvider>
          <MultiCombobox allowsCustomValue label="Select" selectedKeys={['Aardvark']}>
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      act(() => {
        combobox.focus();
      });

      fireEvent.change(combobox, { target: { value: 'Kan' } });

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeVisible();

      fireEvent.keyDown(combobox, { key: 'Escape' });
      fireEvent.keyUp(combobox, { key: 'Escape' });

      act(() => {
        jest.runAllTimers();
      });

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('selection', () => {
    it('should support item selection via mouse down', () => {
      const onSelectionChange = jest.fn();

      render(
        <OverlayProvider>
          <MultiCombobox
            disabledKeys={['snake']}
            label="Select"
            onSelectionChange={onSelectionChange}
          >
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const trigger = screen.getByRole('button');

      fireEvent.click(trigger);

      const listbox = screen.getByRole('listbox');
      const items = within(listbox).getAllByRole('option');

      fireEvent.click(items[1]);

      expect(onSelectionChange).toHaveBeenCalled();

      fireEvent.click(items[2]);

      expect(onSelectionChange).toHaveBeenCalledTimes(2);
    });

    it('should support item selection via Space key down', () => {
      const onSelectionChange = jest.fn();

      render(
        <OverlayProvider>
          <MultiCombobox label="Select" onSelectionChange={onSelectionChange}>
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const trigger = screen.getByRole('button');
      const combobox = screen.getByRole('combobox');

      fireEvent.click(trigger);

      const listbox = screen.getByRole('listbox');
      const items = within(listbox).getAllByRole('option');

      fireEvent.keyDown(listbox, { key: 'ArrowDown' });
      fireEvent.keyUp(listbox, { key: 'ArrowDown' });

      expect(combobox).toHaveAttribute('aria-activedescendant', items[1].id);

      fireEvent.keyDown(items[2], { key: ' ' });

      expect(onSelectionChange).toHaveBeenCalled();
    });

    it('should support item selection via Enter key down', () => {
      const onSelectionChange = jest.fn();

      render(
        <OverlayProvider>
          <MultiCombobox label="Select" onSelectionChange={onSelectionChange}>
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const trigger = screen.getByRole('button');
      const combobox = screen.getByRole('combobox');

      fireEvent.click(trigger);

      const listbox = screen.getByRole('listbox');
      const items = within(listbox).getAllByRole('option');

      fireEvent.keyDown(listbox, { key: 'ArrowDown' });
      fireEvent.keyUp(listbox, { key: 'ArrowDown' });

      expect(combobox).toHaveAttribute('aria-activedescendant', items[1].id);

      fireEvent.keyDown(items[2], { key: 'Enter' });

      expect(onSelectionChange).toHaveBeenCalled();
    });

    it('should reset input value if selecting an already selected value', () => {
      const onInputChange = jest.fn();

      render(
        <OverlayProvider>
          <MultiCombobox
            defaultSelectedKeys={['Aardvark']}
            label="Select"
            onInputChange={onInputChange}
          >
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox: HTMLInputElement = screen.getByRole('combobox');

      expect(screen.getByText('Aardvark')).toBeVisible();

      act(() => {
        combobox.focus();
      });

      fireEvent.change(combobox, { target: { value: 'Ka' } });

      act(() => {
        jest.runAllTimers();
      });

      expect(onInputChange).toHaveBeenCalledTimes(1);
      expect(onInputChange).toHaveBeenLastCalledWith('Ka');
      expect(combobox.value).toBe('Ka');

      const listbox = screen.getByRole('listbox');
      const items = within(listbox).getByRole('option');

      expect(items).toBeInTheDocument();
    });

    it('closes menu and resets selected key if allowsCustomValue=true and no item is focused', () => {
      const onKeyDown = jest.fn();
      const onOpenChange = jest.fn();
      const onSelectionChange = jest.fn();

      render(
        <OverlayProvider>
          <MultiCombobox
            allowsCustomValue
            label="Select"
            selectedKeys={['Aardvark']}
            onKeyDown={onKeyDown}
            onOpenChange={onOpenChange}
            onSelectionChange={onSelectionChange}
          >
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      act(() => {
        combobox.focus();
      });

      fireEvent.change(combobox, { target: { value: 'Ka' } });

      expect(combobox).toHaveFocus();
      expect(combobox).not.toHaveAttribute('aria-activedescendant');

      fireEvent.keyDown(combobox, { key: 'Enter', code: 13, charCode: 13 });
      fireEvent.keyUp(combobox, { key: 'Enter', code: 13, charCode: 13 });

      act(() => {
        jest.runAllTimers();
      });

      expect(onKeyDown).toHaveBeenCalledTimes(1);
      expect(onSelectionChange).toHaveBeenCalledTimes(1);

      expect(onOpenChange).toHaveBeenCalledTimes(2);
      expect(onOpenChange).toHaveBeenLastCalledWith(false, undefined);
    });
  });

  describe('focus', () => {
    it('should support autoFocus', () => {
      const onBlur = jest.fn();
      const onFocus = jest.fn();
      const onFocusChange = jest.fn();

      const focusProps = {
        autoFocus: true,
        onBlur,
        onFocus,
        onFocusChange,
      };

      render(
        <OverlayProvider>
          <MultiCombobox label="Select" {...focusProps}>
            <SelectItem key="Aardvark">Aardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      expect(combobox).toHaveFocus();
      expect(onFocus).toHaveBeenCalled();
      expect(onFocusChange).toHaveBeenCalledWith(true);
    });
  });
});
