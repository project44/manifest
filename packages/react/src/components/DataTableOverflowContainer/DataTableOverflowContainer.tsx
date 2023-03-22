import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledDataTableOverflowContainer } from './DataTableOverflowContainer.styles';
import type {
  DataTableOverflowContainerElement,
  DataTableOverflowContainerProps,
} from './DataTableOverflowContainer.types';

export const DataTableOverflowContainer = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-data-table-overflow-container', classNameProp);

  return (
    <StyledDataTableOverflowContainer
      {...other}
      ref={forwardedRef}
      as={as}
      className={className}
      css={css}
    >
      {children}
    </StyledDataTableOverflowContainer>
  );
}) as ForwardRefComponent<DataTableOverflowContainerElement, DataTableOverflowContainerProps>;
