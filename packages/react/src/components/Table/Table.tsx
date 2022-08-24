import type { StyleProps } from '../../types';
import * as React from 'react';
import { TableContext } from './Table.context';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './Table.styles';

export interface TableProps extends StyleProps, TableContext {}

export const Table = createComponent<'table', TableProps>((props, forwardedRef) => {
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

  return (
    <TableContext.Provider value={{ onMouseEnter, onMouseLeave, showHover }}>
      <Comp
        {...other}
        className={cx(className, classNameProp, 'manifest-table')}
        ref={forwardedRef}
      />
    </TableContext.Provider>
  );
});
