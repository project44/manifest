import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { Icon } from '../Icon';
import { useStyles } from './TableColumn.styles';

type Align = 'center' | 'justify' | 'left' | 'right';

export interface TableColumnProps extends StyleProps {
  /**
   * Text alignment of the table column.
   *
   * @default 'left'
   */
  align?: Align;
  /**
   * The content of the column.
   */
  children?: React.ReactNode;
  /**
   * Whether the current column is actively sorted.
   */
  isActive?: boolean;
  /**
   * Whether the column supports sorting.
   */
  isSortable?: boolean;
  /**
   * The sort direction of the column.
   *
   * @default 'asc'
   */
  sortDirection?: 'asc' | 'desc';
  /**
   * Callback executed on column click, used for column sort only.
   */
  onClick?(event: React.MouseEvent<HTMLTableCellElement>): void;
}

export const TableColumn = createComponent<'th', TableColumnProps>((props, forwardedRef) => {
  const {
    as: Comp = 'th',
    align,
    children,
    className: classNameProp,
    css,
    isActive,
    isSortable,
    sortDirection = 'asc',
    ...other
  } = props;

  const [isHovered, setIsHovered] = React.useState(false);

  const { className } = useStyles({ align, css, isActive, isHovered, isSortable });

  const classes = cx(className, classNameProp, {
    'manifest-table-column': true,
    [`manifest-table-column--${align}`]: align,
  });

  let ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  const handleMouseEnter = React.useCallback(() => {
    if (!isSortable) return;

    setIsHovered(true);
  }, [isSortable]);

  const handleMouseLeave = React.useCallback(() => {
    if (!isSortable) return;

    setIsHovered(false);
  }, [isSortable]);

  return (
    <Comp
      {...other}
      aria-sort={isSortable ? (ariaSort as React.AriaAttributes['aria-sort']) : undefined}
      className={classes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={forwardedRef}
    >
      {children}
      {isSortable && isActive && (
        <Icon
          className={cx('manifest-table-column--icon', {
            'manifest-table-column--icon__ascending': sortDirection === 'asc',
          })}
          icon="expand_more"
        />
      )}
    </Comp>
  );
});
