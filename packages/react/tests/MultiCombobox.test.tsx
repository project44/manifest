import { OverlayProvider } from '@react-aria/overlays';
import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MultiCombobox, SelectItem, SelectSection } from '../src';

describe('@project44-manifest/react - MultiCombobox', () => {
  describe('render', () => {
    it('should render correctly', () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select">
            <SelectItem key="ardvark">Ardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      expect(combobox).toBeVisible();

      act(() => {
        combobox.focus();

        fireEvent.change(combobox, { target: { value: 'Kan' } });
      });

      const listbox = screen.getByRole('listbox');
      const items = within(listbox).getAllByRole('option');

      expect(listbox).toBeVisible();
      expect(items).toHaveLength(1);
      expect(combobox).not.toHaveAttribute('aria-activedescendant');
    });
  });

  describe('open', () => {
    it('should show all items', () => {
      const onOpenChange = jest.fn();

      render(
        <OverlayProvider>
          <MultiCombobox defaultInputValue="hsdjhnkjfd" label="Select" onOpenChange={onOpenChange}>
            <SelectItem key="ardvark">Ardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const trigger = screen.getByRole('button');
      const combobox = screen.getByRole('combobox');

      expect(screen.queryByRole('listbox')).toBeNull();

      act(() => {
        combobox.focus();
      });

      fireEvent.click(trigger);

      expect(onOpenChange).toHaveBeenCalledWith(true, 'manual');

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeVisible();
    });

    it('should open on focus', () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select" menuTrigger="focus">
            <SelectItem key="ardvark">Ardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      act(() => {
        combobox.focus();
      });

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeVisible();
    });

    it('should open via ArrowDown key down', () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select">
            <SelectItem key="ardvark">Ardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      act(() => {
        combobox.focus();
      });

      fireEvent.keyDown(combobox, { key: 'ArrowDown' });

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeVisible();
    });

    it('should open via ArrowUp key down', () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select">
            <SelectItem key="ardvark">Ardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      act(() => {
        combobox.focus();
      });

      fireEvent.keyDown(combobox, { key: 'ArrowUp' });

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeVisible();
    });

    it('should open via arrow button click', () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select">
            <SelectItem key="ardvark">Ardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const trigger = screen.getByRole('button');

      expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');

      fireEvent.click(trigger);

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeVisible();
    });

    it('should open list on user input', async () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select">
            <SelectItem key="ardvark">Ardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      act(() => {
        combobox.focus();
      });

      await userEvent.type(combobox, 'a');

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeVisible();
    });
  });

  describe('close', () => {
    it('should close when clicked outside', async () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select">
            <SelectItem key="ardvark">Ardvark</SelectItem>
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

      await userEvent.click(document.body);

      await waitFor(() => {
        expect(listbox).not.toBeInTheDocument();
      });

      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).not.toHaveAttribute('aria-controls');
    });

    it('should close on Escape key down', async () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select">
            <SelectItem key="ardvark">Ardvark</SelectItem>
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

      await waitFor(() => {
        expect(listbox).not.toBeInTheDocument();
      });

      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).not.toHaveAttribute('aria-controls');
    });

    it('should close and commit custom value', async () => {
      const onOpenChange = jest.fn();
      const onSelectionChange = jest.fn();

      render(
        <OverlayProvider>
          <MultiCombobox
            allowsCustomValue
            label="Test"
            selectedKeys={['ardvark']}
            onOpenChange={onOpenChange}
            onSelectionChange={onSelectionChange}
          >
            <SelectItem key="ardvark">Ardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      expect(onSelectionChange).not.toHaveBeenCalled();

      await userEvent.click(combobox);

      act(() => {
        fireEvent.change(combobox, { target: { value: 'Kan' } });

        combobox.blur();
      });

      expect(onOpenChange).toHaveBeenLastCalledWith(false, undefined);
      expect(onSelectionChange).toHaveBeenCalledTimes(1);

      expect(screen.queryByRole('listbox')).toBeNull();
    });
  });

  describe('value', () => {
    it('should reset the input value on escape key down', async () => {
      render(
        <OverlayProvider>
          <MultiCombobox label="Select">
            <SelectItem key="ardvark">Ardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      act(() => {
        combobox.focus();

        fireEvent.change(combobox, { target: { value: 'Kan' } });
      });

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeVisible();

      fireEvent.keyDown(combobox, { key: 'Escape' });
      fireEvent.keyUp(combobox, { key: 'Escape' });

      await waitFor(() => {
        expect(screen.queryByRole('listbox')).toBeNull();
      });
    });

    it('should reset the input value on escape key down and custom value', async () => {
      render(
        <OverlayProvider>
          <MultiCombobox allowsCustomValue label="Select" selectedKeys={['ardvark']}>
            <SelectItem key="ardvark">Ardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      act(() => {
        combobox.focus();

        fireEvent.change(combobox, { target: { value: 'Kan' } });
      });

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeVisible();

      fireEvent.keyDown(combobox, { key: 'Escape' });
      fireEvent.keyUp(combobox, { key: 'Escape' });

      await waitFor(() => {
        expect(screen.queryByRole('listbox')).toBeNull();
      });
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
            <SelectItem key="ardvark">Ardvark</SelectItem>
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
            <SelectItem key="ardvark">Ardvark</SelectItem>
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
            <SelectItem key="ardvark">Ardvark</SelectItem>
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
            defaultSelectedKeys={['ardvark']}
            label="Select"
            onInputChange={onInputChange}
          >
            <SelectItem key="ardvark">Ardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox: HTMLInputElement = screen.getByRole('combobox');

      expect(screen.getByText('Ardvark')).toBeVisible();

      act(() => {
        combobox.focus();
        fireEvent.change(combobox, { target: { value: 'Ka' } });
      });

      expect(onInputChange).toHaveBeenCalledTimes(1);
      expect(onInputChange).toHaveBeenLastCalledWith('Ka');
      expect(combobox.value).toBe('Ka');

      const listbox = screen.getByRole('listbox');
      const items = within(listbox).getAllByRole('option');

      expect(items).toHaveLength(1);
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
            selectedKeys={['ardvark']}
            onKeyDown={onKeyDown}
            onOpenChange={onOpenChange}
            onSelectionChange={onSelectionChange}
          >
            <SelectItem key="ardvark">Ardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      act(() => {
        combobox.focus();
        fireEvent.change(combobox, { target: { value: 'Ka' } });
      });

      expect(document.activeElement).toBe(combobox);
      expect(combobox).not.toHaveAttribute('aria-activedescendant');

      act(() => {
        fireEvent.keyDown(combobox, { key: 'Enter', code: 13, charCode: 13 });
        fireEvent.keyUp(combobox, { key: 'Enter', code: 13, charCode: 13 });
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
            <SelectItem key="ardvark">Ardvark</SelectItem>
            <SelectItem key="kangaroo">Kangaroo</SelectItem>
            <SelectItem key="snake">Snake</SelectItem>
          </MultiCombobox>
        </OverlayProvider>,
      );

      const combobox = screen.getByRole('combobox');

      expect(document.activeElement).toBe(combobox);
      expect(onFocus).toHaveBeenCalled();
      expect(onFocusChange).toHaveBeenCalledWith(true);
    });
  });
});
