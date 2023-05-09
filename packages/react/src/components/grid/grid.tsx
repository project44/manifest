import * as React from 'react';
import type * as CSSType from 'csstype';
import { CSS, cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledGrid, StyledGridItem } from './grid.styles';

/* -------------------------------------------------------------------------------------------------
 * Grid
 * -----------------------------------------------------------------------------------------------*/

type GridElement = 'div';

interface GridProps {
  /**
   * The gap between columns
   */
  columnGap?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
  /**
   * Shorthand for the gridTemplateColumns css property.
   *
   * @default 'auto'
   */
  columns?: CSSType.Property.GridTemplateColumns;
  /** Theme aware style object */
  css?: CSS;
  /**
   * Shorthand for the gridAutoFlow css property.
   */
  flow?: CSSType.Property.GridAutoFlow;
  /**
   * The gap between rows and columns.
   */
  gap?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
  /**
   * The gap between rows
   */
  rowGap?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
  /**
   * Shorthand for the gridTemplateRows css property.
   *
   * @default 'auto'
   */
  rows?: CSSType.Property.GridTemplateRows;
}

const Grid = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    className: classNameProp,
    columnGap,
    columns = 'auto',
    css,
    flow,
    gap,
    rowGap,
    rows = 'auto',
    ...other
  } = props;

  return (
    <StyledGrid
      {...other}
      ref={forwardedRef}
      as={as}
      className={cx('manifest-grid', classNameProp)}
      columnGap={columnGap}
      css={{
        ...css,
        gridAutoFlow: flow,
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
      }}
      gap={gap}
      rowGap={rowGap}
    />
  );
}) as ForwardRefComponent<GridElement, GridProps>;

/* -------------------------------------------------------------------------------------------------
 * GridItem
 * -----------------------------------------------------------------------------------------------*/

type GridItemElement = 'div';

interface GridItemProps {
  /**
   * Shorthand for the gridArea css property.
   */
  area?: CSSType.Property.GridArea;
  /**
   * Shorthand for the gridColumn css property.
   */
  column?: CSSType.Property.GridColumn;
  /**
   * Shorthand for the gridColumnEnd css property.
   */
  columnEnd?: CSSType.Property.GridColumnEnd;
  /**
   * Shorthand for the gridColumnStart css property.
   */
  columnStart?: CSSType.Property.GridColumnStart;
  /** Theme aware style object */
  css?: CSS;
  /**
   * Shorthand for the order css property.
   */
  order?: CSSType.Property.Order;
  /**
   * Shorthand for the gridRow css property.
   */
  row?: CSSType.Property.GridRow;
  /**
   * Shorthand for the gridRowEnd css property.
   */
  rowEnd?: CSSType.Property.GridRowEnd;
  /**
   * Shorthand for the gridRowStart css property.
   */
  rowStart?: CSSType.Property.GridRowStart;
}

const GridItem = React.forwardRef((props, forwardedRef) => {
  const {
    area,
    as,
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

  return (
    <StyledGridItem
      {...other}
      ref={forwardedRef}
      as={as}
      className={cx('manifest-grid-item', classNameProp)}
      css={{
        ...css,
        gridArea: area,
        gridColumn: typeof column === 'number' ? `span ${column} / span ${column}` : column,
        gridColumnEnd: columnEnd,
        gridColumnStart: columnStart,
        gridRow: typeof row === 'number' ? `span ${row} / span ${row}` : row,
        gridRowEnd: rowEnd,
        gridRowStart: rowStart,
        order,
      }}
    />
  );
}) as ForwardRefComponent<GridItemElement, GridItemProps>;

export type { GridItemProps, GridProps };
export { Grid, GridItem };
