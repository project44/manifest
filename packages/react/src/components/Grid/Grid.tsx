import type * as CSS from 'csstype';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './Grid.styles';

export interface GridProps extends StyleProps {
  /**
   * The gap between columns
   */
  columnGap?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  /**
   * Shorthand for the gridTemplateColumns css property.
   *
   * @default 'auto'
   */
  columns?: number | CSS.Property.GridTemplateColumns;
  /**
   * Shorthand for the gridAutoFlow css property.
   */
  flow?: CSS.Property.GridAutoFlow;
  /**
   * The gap between rows and columns.
   */
  gap?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  /**
   * The gap between rows
   */
  rowGap?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  /**
   * Shorthand for the gridTemplateRows css property.
   *
   * @default 'auto'
   */
  rows?: number | CSS.Property.GridTemplateRows;
}

export const Grid = createComponent<'div', GridProps>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
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

  const { className } = useStyles({
    columnGap,
    gap,
    rowGap,
    css: {
      ...css,
      gridAutoFlow: flow,
      gridTemplateColumns: columns,
      gridTemplateRows: rows,
    },
  });

  return (
    <Comp {...other} className={cx(className, classNameProp, 'manifest-grid')} ref={forwardedRef} />
  );
});
