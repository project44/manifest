import * as React from 'react';
import type { PressEvent } from '@react-types/shared';
import { ChevronDown } from '@project44-manifest/react-icons';
import { RowData } from '@tanstack/react-table';
import { IconButton } from '../../../..';
import type { DataTableExpandButtonProps } from './DataTableExpandButton.types';

export function DataTableExpandButton<TData extends RowData>(
  props: DataTableExpandButtonProps<TData>,
) {
  const { row, table, showCanExpandIcon } = props;

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
      css={{
        display: canExpand || showCanExpandIcon ? 'block' : 'none',
        '&:hover': {
          bgColor: '$colors$palette-grey-300',
        },
      }}
      isDisabled={isLoading || !canExpand}
      size="small"
      variant="tertiary"
      onPress={handleToggleExpand}
    >
      <ChevronDown
        style={{
          transform: `rotate(${isExpanded ? 0 : -90}deg)`,
          transition: 'transform 100ms',
        }}
      />
    </IconButton>
  );
}

DataTableExpandButton.displayName = 'DataTableExpandButton';
