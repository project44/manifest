import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { TableContext } from './Table.context';
import { StyledTable } from './Table.styles';
import type { TableElement, TableProps } from './Table.types';

export const Table = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    children,
    className: classNameProp,
    css,
    isDense = false,
    showHover = false,
    onMouseEnter,
    onMouseLeave,
    ...other
  } = props;

  const className = cx('manifest-table', classNameProp);

  const context = React.useMemo(
    () => ({ isDense, onMouseEnter, onMouseLeave, showHover }),
    [isDense, onMouseEnter, onMouseLeave, showHover],
  );

  return (
    <StyledTable {...other} ref={forwardedRef} as={as} className={className} css={css}>
      <TableContext.Provider value={context}>{children}</TableContext.Provider>
    </StyledTable>
  );
}) as ForwardRefComponent<TableElement, TableProps>;

Table.displayName = 'Table';
