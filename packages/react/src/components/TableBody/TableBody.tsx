import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledTableBody } from './TableBody.styles';
import type { TableBodyElement, TableBodyProps } from './TableBody.types';

export const TableBody = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-table-body', classNameProp);

  return (
    <StyledTableBody {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledTableBody>
  );
}) as ForwardRefComponent<TableBodyElement, TableBodyProps>;

TableBody.displayName = 'TableBody';
