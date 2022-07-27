import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { chain, mergeRefs } from '@react-aria/utils';
import { cx } from '../../styles';
import { useStyles } from './TableCell.styles';

type Align = 'center' | 'justify' | 'left' | 'right';

type TableCellElement = React.ElementRef<'td'>;

interface TableCellProps extends DOMProps, StyleProps {
  /**
   * The content of the cell.
   */
  children?: React.ReactNode;
  /**
   * Text alignment of the table cell.
   *
   * @default 'left'
   */
  align?: Align;
  /**
   * Handler called on mouse enter.
   */
  onMouseEnter?(event: React.MouseEvent<HTMLTableCellElement>): void;
}

const TableCell = React.forwardRef<TableCellElement, TableCellProps>((props, forwardedRef) => {
  const { align = 'left', className: classNameProp, css, children, onMouseEnter, ...other } = props;

  const title = typeof children === 'string' ? children : '';

  const cellRef = React.useRef<HTMLTableCellElement>(null);

  const [isOverflown, setIsOverflown] = React.useState(false);

  const { className } = useStyles({ align, css });

  const classes = cx(className, classNameProp, {
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
    <td
      {...other}
      className={classes}
      onMouseEnter={chain(handleMouseEnter, onMouseEnter)}
      ref={mergeRefs(cellRef, forwardedRef)}
      title={isOverflown ? title : undefined}
    >
      {children}
    </td>
  );
});

if (__DEV__) {
  TableCell.displayName = 'ManifestTableCell';
}

export { TableCell };
export type { TableCellProps };
