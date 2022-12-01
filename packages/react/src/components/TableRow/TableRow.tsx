import * as React from 'react';
import { chain } from '@react-aria/utils';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { useTableContext } from '../Table';
import { useStyles } from './TableRow.styles';

type TableRowElement = 'tr';

export interface TableRowOptions<T extends As = TableRowElement> extends Options<T>, StyleProps {
  /**
   * Handler called on mouse enter.
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
  /**
   * Handler called on mouse leave.
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
}

export type TableRowProps<T extends As = TableRowElement> = Props<TableRowOptions<T>>;

export const TableRow = createComponent<TableRowOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'tr',
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
    <Comp
      {...other}
      ref={forwardedRef}
      className={cx(className, classNameProp, 'manifestui-table-row')}
      onMouseEnter={chain(handleMouseEnter, onMouseEnter, onMouseEnterProp)}
      onMouseLeave={chain(() => void setIsHovered(false), onMouseLeave, onMouseLeaveProp)}
    />
  );
});
