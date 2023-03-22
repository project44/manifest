import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledDataTableBody } from './DataTableBody.styles';
import type { DataTableBodyElement, DataTableBodyProps } from './DataTableBody.types';

export const DataTableBody = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-data-table-body', classNameProp);

  return (
    <StyledDataTableBody {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledDataTableBody>
  );
}) as ForwardRefComponent<DataTableBodyElement, DataTableBodyProps>;
