import * as React from 'react';
import { fireEvent, screen, render, within } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Provider } from '../Provider';
import { Select } from './Select';
import { SelectItem } from '../SelectItem';
import { SelectSection } from '../SelectSection';

describe('@project44-manifest/react - Select', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Provider>
        <Select label="Select" isOpen startIcon={<>icon</>}>
          <SelectItem key="ardvark">Ardvark</SelectItem>
          <SelectItem key="kangaroo">Kangaroo</SelectItem>
          <SelectItem key="snake">Snake</SelectItem>
          <SelectSection title="Section">
            <SelectItem key="dog">Dog</SelectItem>
          </SelectSection>
        </Select>
      </Provider>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render and support selection', () => {
    const onSelectionChange = jest.fn();

    render(
      <Provider>
        <Select disabledKeys={['snake']} label="Select" onSelectionChange={onSelectionChange}>
          <SelectItem key="ardvark">Ardvark</SelectItem>
          <SelectItem key="kangaroo">Kangaroo</SelectItem>
          <SelectItem key="snake">Snake</SelectItem>
        </Select>
      </Provider>,
    );

    const select = screen.getByRole('textbox', { hidden: true });

    expect(select).not.toBeDisabled();

    const trigger = screen.getByRole('button');

    expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');

    fireEvent.click(trigger);

    const listbox = screen.getByRole('listbox');
    const items = within(listbox).getAllByRole('option');

    expect(listbox).toBeVisible();

    expect(items).toHaveLength(3);

    fireEvent.click(items[1]);

    expect(onSelectionChange).toHaveBeenCalled();

    fireEvent.click(items[2]);

    expect(onSelectionChange).toHaveBeenCalledTimes(1);
  });

  it('should render and keyboard navigation', () => {
    const onOpenChange = jest.fn();
    const onSelectionChange = jest.fn();

    render(
      <Provider>
        <Select label="Select" onOpenChange={onOpenChange} onSelectionChange={onSelectionChange}>
          <SelectItem key="ardvark">Ardvark</SelectItem>
          <SelectItem key="kangaroo">Kangaroo</SelectItem>
          <SelectItem key="snake">Snake</SelectItem>
        </Select>
      </Provider>,
    );

    const select = screen.getByRole('textbox', { hidden: true });

    expect(select).not.toBeDisabled();

    const trigger = screen.getByRole('button');

    expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');

    fireEvent.keyDown(trigger, { key: ' ' });

    const listbox = screen.getByRole('listbox');
    const items = within(listbox).getAllByRole('option');

    expect(listbox).toBeVisible();

    expect(items).toHaveLength(3);

    fireEvent.keyDown(listbox, { key: 'ArrowDown' });
    fireEvent.keyUp(listbox, { key: 'ArrowDown' });

    expect(document.activeElement).toBe(items[1]);

    fireEvent.keyDown(items[2], { key: ' ' });

    expect(onSelectionChange).toHaveBeenCalled();
  });
});
