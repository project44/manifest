import * as React from 'react';
import { ChevronDown } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledTableColumn } from './TableColumn.styles';
import type { TableColumnElement, TableColumnProps } from './TableColumn.types';

export const TableColumn = React.forwardRef((props, forwardedRef) => {
  const {
    as,
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

  const className = cx(classNameProp, {
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
    <StyledTableColumn
      {...other}
      ref={forwardedRef}
      align={align}
      aria-sort={isSortable ? (ariaSort as React.AriaAttributes['aria-sort']) : undefined}
      as={as}
      className={className}
      css={css}
      isActive={isActive}
      isHovered={isHovered}
      isSortable={isSortable}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isSortable && isActive && (
        <ChevronDown
          aria-hidden
          className={cx('manifest-table-column--icon', {
            'manifest-table-column--icon__ascending': sortDirection === 'asc',
          })}
        />
      )}
    </StyledTableColumn>
  );
}) as ForwardRefComponent<TableColumnElement, TableColumnProps>;
