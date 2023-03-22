import * as React from 'react';
import { chain, mergeRefs } from '@react-aria/utils';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { useDataTableContext } from '../DataTable';
import { StyledDataTableCell } from './DataTableCell.styles';
import type { DataTableCellElement, DataTableCellProps } from './DataTableCell.types';

export const DataTableCell = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    align = 'left',
    children,
    className: classNameProp,
    css,
    isPinnedLeft = false,
    isPinnedRight = false,
    onMouseEnter,
    ...other
  } = props;

  const title = typeof children === 'string' ? children : '';

  const cellRef = React.useRef<HTMLTableCellElement>(null);

  const [isOverflown, setIsOverflown] = React.useState(false);

  const { isDense } = useDataTableContext();

  const className = cx('manifest-data-table-cell', classNameProp, {
    'manifest-data-table-cell': true,
    [`manifest-data-table-cell--${align}`]: align,
  });

  const handleMouseEnter = React.useCallback(() => {
    const cell = cellRef?.current;

    if (cell) {
      setIsOverflown(cell.scrollWidth > cell.offsetWidth);
    }
  }, [cellRef]);

  return (
    <StyledDataTableCell
      {...other}
      ref={mergeRefs(cellRef, forwardedRef)}
      align={align}
      as={as}
      className={className}
      css={css}
      isDense={isDense}
      isPinnedLeft={isPinnedLeft}
      isPinnedRight={isPinnedRight}
      title={isOverflown ? title : undefined}
      onMouseEnter={chain(handleMouseEnter, onMouseEnter)}
    >
      {children}
    </StyledDataTableCell>
  );
}) as ForwardRefComponent<DataTableCellElement, DataTableCellProps>;
