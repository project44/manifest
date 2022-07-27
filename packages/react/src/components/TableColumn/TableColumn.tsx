import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';
import { Icon } from '../Icon';
import { useStyles } from './TableColumn.styles';

type Align = 'center' | 'justify' | 'left' | 'right';

type TableColumnElement = React.ElementRef<'th'>;

interface TableColumnProps extends DOMProps, StyleProps {
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
  onClick?(event: React.MouseEvent<TableColumnElement>): void;
}

const TableColumn = React.forwardRef<TableColumnElement, TableColumnProps>(
  (props, forwardedRef) => {
    const {
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
      <th
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
      </th>
    );
  },
);

if (__DEV__) {
  TableColumn.displayName = 'ManifestTableColumn';
}

export { TableColumn };
export type { TableColumnProps };
