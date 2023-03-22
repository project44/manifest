import * as React from 'react';
import { ChevronDown } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledDataTableColumn } from './DataTableColumn.styles';
import type { DataTableColumnElement, DataTableColumnProps } from './DataTableColumn.types';

export const DataTableColumn = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    align,
    children,
    className: classNameProp,
    css,
    isActive,
    isPinnedLeft = false,
    isPinnedRight = false,
    isSortable,
    sortDirection = 'asc',
    ...other
  } = props;

  const className = cx(classNameProp, {
    'manifest-data-table-column': true,
    [`manifest-data-table-column--${align}`]: align,
  });

  let ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return (
    <StyledDataTableColumn
      {...other}
      ref={forwardedRef}
      align={align}
      aria-sort={isSortable ? (ariaSort as React.AriaAttributes['aria-sort']) : undefined}
      as={as}
      className={className}
      css={css}
      isActive={isActive}
      isPinnedLeft={isPinnedLeft}
      isPinnedRight={isPinnedRight}
      isSortable={isSortable}
    >
      {children}
      {isSortable && isActive && (
        <ChevronDown
          aria-hidden
          className={cx('manifest-data-table-column--icon', {
            'manifest-data-table-column--icon__ascending': sortDirection === 'asc',
          })}
        />
      )}
    </StyledDataTableColumn>
  );
}) as ForwardRefComponent<DataTableColumnElement, DataTableColumnProps>;
