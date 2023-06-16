import { OverlayProvider } from '@react-aria/overlays';
import { Collapsed } from '@project44-manifest/react-icons';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, IconButton } from '../src';

it('should render and support selection', () => {
  const onAction = jest.fn();

  render(
    <OverlayProvider>
      <Dropdown>
        <IconButton variant="primary">
          <Collapsed />
        </IconButton>
        <DropdownMenu onAction={onAction}>
          <DropdownItem key="Aardvark">Aardvark</DropdownItem>
          <DropdownItem key="kangaroo">Kangaroo</DropdownItem>
          <DropdownItem key="snake">Snake</DropdownItem>
          <DropdownSection title="Section">
            <DropdownItem key="dog">Dog</DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </OverlayProvider>,
  );

  expect(screen.queryByRole('menu')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button'));

  const menu = screen.getByRole('menu');
  const items = within(menu).getAllByRole('menuitem');

  expect(menu).toBeVisible();
  expect(items).toHaveLength(4);

  fireEvent.click(screen.getByText('Aardvark'));

  expect(onAction).toHaveBeenCalled();
});

it('should keyboard navigation', () => {
  const onAction = jest.fn();

  render(
    <OverlayProvider>
      <Dropdown>
        <IconButton variant="primary">
          <Collapsed />
        </IconButton>
        <DropdownMenu onAction={onAction}>
          <DropdownItem key="Aardvark">Aardvark</DropdownItem>
          <DropdownItem key="kangaroo">Kangaroo</DropdownItem>
          <DropdownItem key="snake">Snake</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </OverlayProvider>,
  );

  expect(screen.queryByRole('menu')).not.toBeInTheDocument();

  fireEvent.keyDown(screen.getByRole('button'), { key: ' ', code: 32, charCode: 32 });

  const menu = screen.getByRole('menu');
  const items = within(menu).getAllByRole('menuitem');

  expect(menu).toBeVisible();
  expect(items).toHaveLength(3);

  const selectedItem = items[0];

  expect(selectedItem).toHaveFocus();

  fireEvent.keyDown(selectedItem, { key: 'ArrowDown', code: 40, charCode: 40 });

  const nextSelectedItem = items[1];

  expect(nextSelectedItem).toHaveFocus();

  fireEvent.keyDown(nextSelectedItem, { key: 'ArrowUp', code: 38, charCode: 38 });

  expect(selectedItem).toHaveFocus();

  fireEvent.keyDown(nextSelectedItem, { key: ' ', code: 32, charCode: 32 });

  expect(onAction).toHaveBeenCalled();
});

it('should support disabled keys', () => {
  const onAction = jest.fn();

  render(
    <OverlayProvider>
      <Dropdown>
        <IconButton variant="primary">
          <Collapsed />
        </IconButton>
        <DropdownMenu disabledKeys={['kangaroo']} onAction={onAction}>
          <DropdownItem key="Aardvark">Aardvark</DropdownItem>
          <DropdownItem key="kangaroo">Kangaroo</DropdownItem>
          <DropdownItem key="snake">Snake</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </OverlayProvider>,
  );

  expect(screen.queryByRole('menu')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button'));

  const menu = screen.getByRole('menu');
  const items = within(menu).getAllByRole('menuitem');

  expect(menu).toBeVisible();
  expect(items).toHaveLength(3);

  expect(items[1]).toHaveAttribute('aria-disabled', 'true');

  fireEvent.click(items[1]);

  expect(onAction).not.toHaveBeenCalled();
});

it('should support single selection', () => {
  const onSelectionChange = jest.fn();

  render(
    <OverlayProvider>
      <Dropdown>
        <IconButton variant="primary">
          <Collapsed />
        </IconButton>
        <DropdownMenu
          disabledKeys={['kangaroo']}
          selectionMode="single"
          onSelectionChange={onSelectionChange}
        >
          <DropdownItem key="Aardvark">Aardvark</DropdownItem>
          <DropdownItem key="kangaroo">Kangaroo</DropdownItem>
          <DropdownItem key="snake">Snake</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </OverlayProvider>,
  );

  expect(screen.queryByRole('menu')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button'));

  const menu = screen.getByRole('menu');
  const items = within(menu).getAllByRole('menuitemradio');

  expect(menu).toBeVisible();
  expect(items).toHaveLength(3);

  expect(items[1]).toHaveAttribute('aria-checked', 'false');
  expect(items[1]).toHaveAttribute('aria-disabled', 'true');

  fireEvent.click(items[1]);

  expect(onSelectionChange).not.toHaveBeenCalled();

  fireEvent.click(items[0]);

  expect(onSelectionChange).toHaveBeenCalled();
});

it('should support multi selection', () => {
  const onSelectionChange = jest.fn();

  render(
    <OverlayProvider>
      <Dropdown>
        <IconButton variant="primary">
          <Collapsed />
        </IconButton>
        <DropdownMenu
          disabledKeys={['kangaroo']}
          selectionMode="multiple"
          onSelectionChange={onSelectionChange}
        >
          <DropdownItem key="Aardvark">Aardvark</DropdownItem>
          <DropdownItem key="kangaroo">Kangaroo</DropdownItem>
          <DropdownItem key="snake">Snake</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </OverlayProvider>,
  );

  expect(screen.queryByRole('menu')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button'));

  const menu = screen.getByRole('menu');
  const items = within(menu).getAllByRole('menuitemcheckbox');

  expect(menu).toBeVisible();
  expect(items).toHaveLength(3);

  fireEvent.click(items[0]);

  expect(items[0]).toHaveAttribute('aria-checked', 'true');

  expect(onSelectionChange).toHaveBeenCalled();

  expect(items[1]).toHaveAttribute('aria-checked', 'false');
  expect(items[1]).toHaveAttribute('aria-disabled', 'true');

  fireEvent.click(items[1]);

  expect(onSelectionChange).toHaveBeenCalledTimes(1);

  fireEvent.click(items[2]);

  expect(items[2]).toHaveAttribute('aria-checked', 'true');

  expect(onSelectionChange).toHaveBeenCalledTimes(2);
});
