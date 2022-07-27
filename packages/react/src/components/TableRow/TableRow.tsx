import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { chain } from '@react-aria/utils';
import { cx } from '../../styles';
import { useStyles } from './TableRow.styles';
import { useTableContext } from '../Table';

type TableRowElement = React.ElementRef<'tr'>;

interface TableRowProps extends DOMProps, StyleProps {
  /**
   * The cells within the row.
   */
  children?: React.ReactNode;
  /**
   * Handler called on mouse enter.
   */
  onMouseEnter?(event: React.MouseEvent<HTMLTableRowElement>): void;
  /**
   * Handler called on mouse leave.
   */
  onMouseLeave?(event: React.MouseEvent<HTMLTableRowElement>): void;
}

const TableRow = React.forwardRef<TableRowElement, TableRowProps>((props, forwardedRef) => {
  const {
    className: classNameProp,
    onMouseEnter: onMouseEnterProp,
    onMouseLeave: onMouseLeaveProp,
    ...other
  } = props;

  const { onMouseEnter, onMouseLeave, showHover } = useTableContext();

  const [isHovered, setIsHovered] = React.useState(false);

  const { className } = useStyles({ isHovered });

  const handleMouseEnter = React.useCallback(() => {
    if (!showHover) return;

    setIsHovered(true);
  }, [setIsHovered, showHover]);

  return (
    <tr
      {...other}
      className={cx(className, classNameProp, 'manifestui-table-row')}
      onMouseEnter={chain(handleMouseEnter, onMouseEnter, onMouseEnterProp)}
      onMouseLeave={chain(() => setIsHovered(false), onMouseLeave, onMouseLeaveProp)}
      ref={forwardedRef}
    />
  );
});

if (__DEV__) {
  TableRow.displayName = 'ManifestTableRow';
}

export { TableRow };
export type { TableRowProps };
