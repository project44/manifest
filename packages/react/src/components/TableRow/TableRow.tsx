import * as React from 'react';
import { chain } from '@react-aria/utils';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { useTableContext } from '../Table';
import { StyledTableRow } from './TableRow.styles';
import type { TableRowElement, TableRowProps } from './TableRow.types';

export const TableRow = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    children,
    className: classNameProp,
    css,
    onMouseEnter: onMouseEnterProp,
    onMouseLeave: onMouseLeaveProp,
    ...other
  } = props;

  const { onMouseEnter, onMouseLeave, showHover } = useTableContext();

  const [isHovered, setIsHovered] = React.useState(false);

  const className = cx('manifest-table-row', classNameProp);

  const handleMouseEnter = React.useCallback(() => {
    if (!showHover) return;

    setIsHovered(true);
  }, [setIsHovered, showHover]);

  return (
    <StyledTableRow
      {...other}
      ref={forwardedRef}
      as={as}
      className={className}
      css={css}
      isHovered={isHovered}
      onMouseEnter={chain(handleMouseEnter, onMouseEnter, onMouseEnterProp)}
      onMouseLeave={chain(() => void setIsHovered(false), onMouseLeave, onMouseLeaveProp)}
    >
      {children}
    </StyledTableRow>
  );
}) as ForwardRefComponent<TableRowElement, TableRowProps>;

TableRow.displayName = 'TableRow';
