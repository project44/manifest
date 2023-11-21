import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledTableHeader } from './TableHeader.styles';
import type { TableHeaderElement, TableHeaderProps } from './TableHeader.types';

export const TableHeader = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-table-header', classNameProp);

  return (
    <StyledTableHeader {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledTableHeader>
  );
}) as ForwardRefComponent<TableHeaderElement, TableHeaderProps>;

TableHeader.displayName = 'TableHeader';
