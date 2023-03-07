import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledTableRow } from './TableRow.styles';
import type { TableRowElement, TableRowProps } from './TableRow.types';

export const TableRow = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-table-row', classNameProp);

  return (
    <StyledTableRow {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledTableRow>
  );
}) as ForwardRefComponent<TableRowElement, TableRowProps>;
