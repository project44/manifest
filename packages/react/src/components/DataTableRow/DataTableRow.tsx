import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledDataTableRow } from './DataTableRow.styles';
import type { DataTableRowElement, DataTableRowProps } from './DataTableRow.types';

export const DataTableRow = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-data-table-row', classNameProp);

  return (
    <StyledDataTableRow {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledDataTableRow>
  );
}) as ForwardRefComponent<DataTableRowElement, DataTableRowProps>;
