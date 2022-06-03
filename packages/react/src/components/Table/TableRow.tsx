import * as React from 'react';
import { cx, VariantProps } from '../../styles';
import { chainCallbacks } from '../../utils';
import { StyledTableRow } from './Table.styles';
import { useTableContext } from './Table.context';

type TableRowElement = React.ElementRef<typeof StyledTableRow>;
type TableRowNativeProps = React.ComponentPropsWithoutRef<typeof StyledTableRow>;

export interface TableRowProps extends VariantProps<typeof StyledTableRow>, TableRowNativeProps {}

export const TableRow = React.forwardRef<TableRowElement, TableRowProps>((props, forwardedRef) => {
  const {
    className,
    onMouseEnter: onMouseEnterProp,
    onMouseLeave: onMouseLeaveProp,
    ...other
  } = props;

  const { onMouseEnter, onMouseLeave, showHover } = useTableContext();

  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = React.useCallback(() => {
    if (!showHover) return;

    setIsHovered(true);
  }, [setIsHovered, showHover]);

  return (
    <StyledTableRow
      {...other}
      className={cx('manifestui-table--row', className)}
      isHovered={isHovered}
      onMouseEnter={chainCallbacks(handleMouseEnter, onMouseEnter, onMouseEnterProp)}
      onMouseLeave={chainCallbacks(() => setIsHovered(false), onMouseLeave, onMouseLeaveProp)}
      ref={forwardedRef}
    />
  );
});
