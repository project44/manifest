import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledTableFooter } from './TableFooter.styles';
import type { TableFooterElement, TableFooterProps } from './TableFooter.types';

export const TableFooter = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-table-footer', classNameProp);

  return (
    <StyledTableFooter {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledTableFooter>
  );
}) as ForwardRefComponent<TableFooterElement, TableFooterProps>;

TableFooter.displayName = 'TableFooter';
