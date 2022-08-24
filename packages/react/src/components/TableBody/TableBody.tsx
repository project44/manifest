import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';

export type TableBodyProps = StyleProps;

export const TableBody = createComponent<'tbody', TableBodyProps>(
  ({ as: Comp = 'tbody', className, ...other }, forwardedRef) => (
    <Comp {...other} className={cx(className, 'manifest-table-body')} ref={forwardedRef} />
  ),
);
