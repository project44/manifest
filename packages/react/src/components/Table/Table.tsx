import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { TableContext } from './Table.context';
import { cx } from '../../styles';
import { useStyles } from './Table.styles';

type TableElement = React.ElementRef<'table'>;

interface TableProps extends DOMProps, StyleProps, TableContext {
  /**
   * The content of the table.
   */
  children?: React.ReactNode;
}

const Table = React.forwardRef<TableElement, TableProps>((props, forwardedRef) => {
  const {
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
      <table
        {...other}
        className={cx(className, classNameProp, 'manifest-table')}
        ref={forwardedRef}
      />
    </TableContext.Provider>
  );
});

if (__DEV__) {
  Table.displayName = 'ManifestTable';
}

export { Table };
export type { TableProps };
