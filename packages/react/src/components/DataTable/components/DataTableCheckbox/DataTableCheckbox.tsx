import * as React from 'react';
import { RowData } from '@tanstack/react-table';
import { Checkbox } from '../../../Checkbox';
import type { DataTableCheckboxProps } from './DataTableCheckbox.types';

export function DataTableCheckbox<TData extends RowData>(props: DataTableCheckboxProps<TData>) {
  const { row, table, enableCheckboxForChildren } = props;

  const { options } = table;
  const { selectCheckboxProps, selectAllCheckboxProps } = options;

  let parsedProps;

  if (row) {
    parsedProps =
      typeof selectCheckboxProps === 'function'
        ? selectCheckboxProps({ row, table })
        : selectCheckboxProps;
  } else {
    parsedProps =
      typeof selectAllCheckboxProps === 'function'
        ? selectAllCheckboxProps({ table })
        : selectAllCheckboxProps;
  }

  const isSelected = row ? row?.getIsSelected() : table.getIsAllPageRowsSelected();
  const isDisabled = row && !row.getCanSelect();
  const isIndeterminate = row
    ? row?.getIsSomeSelected()
    : table.getIsSomeRowsSelected() && !table.getIsAllPageRowsSelected();

  const handleChange = React.useCallback(
    (checked: boolean) =>
      row ? void row?.toggleSelected(checked) : void table.toggleAllPageRowsSelected(),
    [row, table],
  );

  return (
    <div className="manifest-data-table__checkbox">
      {(!row?.parentId || enableCheckboxForChildren) && (
        <Checkbox
          isDisabled={isDisabled}
          isIndeterminate={isIndeterminate}
          isSelected={isSelected}
          onChange={handleChange}
          {...parsedProps}
        />
      )}
    </div>
  );
}

DataTableCheckbox.displayName = 'DataTableCheckbox';