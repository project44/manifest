import type * as CSS from 'csstype';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { useStyles } from './Grid.styles';

export type GridElement = 'div';

export interface GridOptions<T extends As = GridElement> extends Options<T>, StyleProps {
  /**
   * The gap between columns
   */
  columnGap?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
  /**
   * Shorthand for the gridTemplateColumns css property.
   *
   * @default 'auto'
   */
  columns?: CSS.Property.GridTemplateColumns;
  /**
   * Shorthand for the gridAutoFlow css property.
   */
  flow?: CSS.Property.GridAutoFlow;
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
  rows?: CSS.Property.GridTemplateRows;
}

export type GridProps<T extends As = GridElement> = Props<GridOptions<T>>;

export const Grid = createComponent<GridOptions>((props, forwardedRef) => {
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
    <Comp {...other} ref={forwardedRef} className={cx(className, classNameProp, 'manifest-grid')} />
  );
});
