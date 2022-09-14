import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { chain, mergeRefs } from '@react-aria/utils';
import { cx } from '../../styles';
import { useStyles } from './TableCell.styles';

type Align = 'center' | 'justify' | 'left' | 'right';
type TableCellElement = 'td';

export interface TableCellOptions<T extends As = TableCellElement> extends Options<T>, StyleProps {
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

export type TableCellProps<T extends As = TableCellElement> = Props<TableCellOptions<T>>;

export const TableCell = createComponent<TableCellOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'td',
    align = 'left',
    className: classNameProp,
    css,
    children,
    onMouseEnter,
    ...other
  } = props;

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
    <Comp
      {...other}
      className={classes}
      onMouseEnter={chain(handleMouseEnter, onMouseEnter)}
      ref={mergeRefs(cellRef, forwardedRef)}
      title={isOverflown ? title : undefined}
    >
      {children}
    </Comp>
  );
});
