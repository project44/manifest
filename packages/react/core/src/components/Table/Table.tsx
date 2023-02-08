import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { TableContext } from './Table.context';
import { useStyles } from './Table.styles';

export type TableElement = 'table';
export type TableOptions<T extends As = TableElement> = Options<T> & StyleProps & TableContext;
export type TableProps<T extends As = TableElement> = Props<TableOptions<T>>;

export const Table = createComponent<TableOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'table',
    className: classNameProp,
    css,
    showHover = false,
    onMouseEnter,
    onMouseLeave,
    ...other
  } = props;

  const { className } = useStyles({ css });

  const context = React.useMemo(
    () => ({ onMouseEnter, onMouseLeave, showHover }),
    [onMouseEnter, onMouseLeave, showHover],
  );

  return (
    <TableContext.Provider value={context}>
      <Comp
        {...other}
        ref={forwardedRef}
        className={cx(className, classNameProp, 'manifest-table')}
      />
    </TableContext.Provider>
  );
});
