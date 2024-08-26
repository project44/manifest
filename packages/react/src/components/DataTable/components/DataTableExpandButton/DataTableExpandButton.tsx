import * as React from 'react';
import type { PressEvent } from '@react-types/shared';
import { ChevronDown } from '@project44-manifest/react-icons';
import { RowData } from '@tanstack/react-table';
import { IconButton } from '../../../..';
import type { DataTableExpandButtonProps } from './DataTableExpandButton.types';

export function DataTableExpandButton<TData extends RowData>(
  props: DataTableExpandButtonProps<TData>,
) {
  const { row, table, isCanExpandIconVisible, expandIconFunction } = props;

  const { options } = table;
  const { expandButtonProps, isLoading } = options;

  const parsedProps =
    typeof expandButtonProps === 'function' ? expandButtonProps({ table, row }) : expandButtonProps;

  const canExpand = row.getCanExpand();
  const isExpanded = row.getIsExpanded();

  const handleToggleExpand = React.useCallback(
    (event: PressEvent) => {
      void row.toggleExpanded();

      parsedProps?.onPress?.(event);
    },
    [row, parsedProps],
  );

  return (
    <IconButton
      {...parsedProps}
      css={{ display: canExpand || isCanExpandIconVisible ? 'block' : 'none' }}
      isDisabled={isLoading || !canExpand}
      size="small"
      variant="tertiary"
      onPress={handleToggleExpand}
    >
      <ChevronDown
        style={{
          transform: `rotate(${expandIconFunction(isExpanded)}deg)`,
          transition: 'transform 100ms',
        }}
      />
    </IconButton>
  );
}

DataTableExpandButton.displayName = 'DataTableExpandButton';
