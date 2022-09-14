import type * as CSS from 'csstype';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './GridItem.styles';

export type GridItemElement = 'div';

export interface GridItemOptions<T extends As = GridItemElement> extends Options<T>, StyleProps {
  /**
   * Shorthand for the gridArea css property.
   */
  area?: CSS.Property.GridArea;
  /**
   * Shorthand for the gridColumn css property.
   */
  column?: CSS.Property.GridColumn;
  /**
   * Shorthand for the gridColumnEnd css property.
   */
  columnEnd?: CSS.Property.GridColumnEnd;
  /**
   * Shorthand for the gridColumnStart css property.
   */
  columnStart?: CSS.Property.GridColumnStart;
  /**
   * Shorthand for the order css property.
   */
  order?: CSS.Property.Order;
  /**
   * Shorthand for the gridRow css property.
   */
  row?: CSS.Property.GridRow;
  /**
   * Shorthand for the gridRowEnd css property.
   */
  rowEnd?: CSS.Property.GridRowEnd;
  /**
   * Shorthand for the gridRowStart css property.
   */
  rowStart?: CSS.Property.GridRowStart;
}

export type GridItemProps<T extends As = GridItemElement> = Props<GridItemOptions<T>>;

export const GridItem = createComponent<GridItemOptions>((props, forwardedRef) => {
  const {
    area,
    as: Comp = 'div',
    className: classNameProp,
    css,
    column,
    columnEnd,
    columnStart,
    order,
    row,
    rowEnd,
    rowStart,
    ...other
  } = props;

  const { className } = useStyles({
    css: {
      ...css,
      gridArea: area,
      gridColumn: typeof column === 'number' ? `span ${column} / span ${column}` : column,
      gridColumnEnd: columnEnd,
      gridColumnStart: columnStart,
      gridRow: typeof row === 'number' ? `span ${row} / span ${row}` : row,
      gridRowEnd: rowEnd,
      gridRowStart: rowStart,
      order,
    },
  });

  return (
    <Comp {...other} className={cx(className, classNameProp, 'manifest-grid')} ref={forwardedRef} />
  );
});
