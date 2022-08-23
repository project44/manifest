import type { StyleProps } from '../../types';
import * as React from 'react';
import { chain } from '@react-aria/utils';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './TableRow.styles';
import { useTableContext } from '../Table';

export interface TableRowProps extends StyleProps {
  /**
   * Handler called on mouse enter.
   */
  onMouseEnter?(event: React.MouseEvent<HTMLTableRowElement>): void;
  /**
   * Handler called on mouse leave.
   */
  onMouseLeave?(event: React.MouseEvent<HTMLTableRowElement>): void;
}

export const TableRow = createComponent<'tr', TableRowProps>((props, forwardedRef) => {
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
      className={cx(className, classNameProp, 'manifestui-table-row')}
      onMouseEnter={chain(handleMouseEnter, onMouseEnter, onMouseEnterProp)}
      onMouseLeave={chain(() => setIsHovered(false), onMouseLeave, onMouseLeaveProp)}
      ref={forwardedRef}
    />
  );
});
