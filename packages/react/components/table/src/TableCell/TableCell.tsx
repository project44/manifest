import * as React from 'react';
import { chain, mergeRefs } from '@react-aria/utils';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledTableCell } from './TableCell.styles';
import type { TableCellElement, TableCellProps } from './TableCell.types';

export const TableCell = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    align = 'left',
    children,
    className: classNameProp,
    css,
    onMouseEnter,
    ...other
  } = props;

  const title = typeof children === 'string' ? children : '';

  const cellRef = React.useRef<HTMLTableCellElement>(null);

  const [isOverflown, setIsOverflown] = React.useState(false);

  const className = cx('manifest-table-cell', classNameProp, {
    'manifest-table-cell': true,
    [`manifest-table-cell--${align}`]: align,
  });

  const handleMouseEnter = React.useCallback(() => {
    const cell = cellRef?.current;

    if (cell) {
      setIsOverflown(cell.scrollWidth > cell.offsetWidth);
    }
  }, [cellRef]);

  return (
    <StyledTableCell
      {...other}
      ref={mergeRefs(cellRef, forwardedRef)}
      align={align}
      as={as}
      className={className}
      css={css}
      title={isOverflown ? title : undefined}
      onMouseEnter={chain(handleMouseEnter, onMouseEnter)}
    >
      {children}
    </StyledTableCell>
  );
}) as ForwardRefComponent<TableCellElement, TableCellProps>;
