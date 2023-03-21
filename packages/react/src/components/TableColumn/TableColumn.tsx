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

  const className = cx(classNameProp, {
    'manifest-table-column': true,
    [`manifest-table-column--${align}`]: align,
  });

  let ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

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
      isSortable={isSortable}
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
