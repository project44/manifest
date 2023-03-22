import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledDataTableHeader } from './DataTableHeader.styles';
import type { DataTableHeaderElement, DataTableHeaderProps } from './DataTableHeader.types';

export const DataTableHeader = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-data-table-header', classNameProp);

  return (
    <StyledDataTableHeader {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledDataTableHeader>
  );
}) as ForwardRefComponent<DataTableHeaderElement, DataTableHeaderProps>;
