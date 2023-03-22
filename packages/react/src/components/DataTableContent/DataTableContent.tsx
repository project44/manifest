import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledDataTableContent } from './DataTableContent.styles';
import type { DataTableContentElement, DataTableContentProps } from './DataTableContent.types';

export const DataTableContent = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-data-table-content', classNameProp);

  return (
    <StyledDataTableContent {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledDataTableContent>
  );
}) as ForwardRefComponent<DataTableContentElement, DataTableContentProps>;
