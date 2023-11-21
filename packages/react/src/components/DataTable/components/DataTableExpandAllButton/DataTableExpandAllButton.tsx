import * as React from 'react';
import type { PressEvent } from '@react-types/shared';
import { ChevronDown } from '@project44-manifest/react-icons';
import { RowData } from '@tanstack/react-table';
import { IconButton } from '../../../button';
import type { DataTableExpandAllButtonProps } from './DataTableExpandAllButton.types';

export function DataTableExpandAllButton<TData extends RowData>(
  props: DataTableExpandAllButtonProps<TData>,
) {
  const { table } = props;

  const { options } = table;
  const { expandAllButtonProps, isLoading } = options;

  const parsedProps =
    typeof expandAllButtonProps === 'function'
      ? expandAllButtonProps({ table })
      : expandAllButtonProps;

  const isAllRowsExpanded = table.getIsAllRowsExpanded();

  const handleToggleExpand = React.useCallback(
    (event: PressEvent) => {
      void table.toggleAllRowsExpanded(!isAllRowsExpanded);

      parsedProps?.onPress?.(event);
    },
    [isAllRowsExpanded, parsedProps, table],
  );

  return (
    <IconButton
      {...parsedProps}
      isDisabled={isLoading || !table.getCanSomeRowsExpand()}
      size="small"
      variant="tertiary"
      onPress={handleToggleExpand}
    >
      <ChevronDown
        style={{
          transform: `rotate(${isAllRowsExpanded ? -180 : 0}deg)`,
          transition: 'transform 100ms',
        }}
      />
    </IconButton>
  );
}

DataTableExpandAllButton.displayName = 'DataTableExpandAllButton';
