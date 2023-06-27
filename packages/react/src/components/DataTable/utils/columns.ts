import type * as React from 'react';
import { theme } from '@project44-manifest/react-styles';
import type { Column, RowData } from '@tanstack/react-table';
import type { DataTable } from '../DataTable.types';

export const getColumnLayoutStyles = <TData extends RowData, TVaue>(
  table: DataTable<TData>,
  column: Column<TData, TVaue>,
) => {
  const leftOffset = column.getStart('left');
  const rightOffset = (table.getRightLeafHeaders().length - 1 - column.getPinnedIndex()) * 180;
  const isFirstRightPinnedColumn =
    column.getIsPinned() === 'right' && column.getPinnedIndex() === 0;
  const isLastLeftPinnedColumn =
    column.getIsPinned() === 'left' &&
    table.getLeftLeafHeaders().length - 1 === column.getPinnedIndex();

  const styles: React.CSSProperties = {
    left: column.getIsPinned() === 'left' ? `${leftOffset}px` : undefined,
    right: column.getIsPinned() === 'right' ? `${rightOffset}px` : undefined,
    minWidth: `max(calc(${column.getSize()} * 1px), ${column.columnDef.minSize ?? 40}px)`,
    width: `calc(${column.getSize()} * 1px)`,
    ...(isFirstRightPinnedColumn && { borderLeft: `1px solid ${theme.colors['border-primary']}` }),
    ...(isLastLeftPinnedColumn && { borderRight: `1px solid ${theme.colors['border-primary']}` }),
  };

  return styles;
};
