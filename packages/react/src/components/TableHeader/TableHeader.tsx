import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';

export type TableHeaderProps = StyleProps;

export const TableHeader = createComponent<'thead', TableHeaderProps>(
  ({ as: Comp = 'thead', className, ...other }, forwardedRef) => (
    <Comp {...other} className={cx(className, 'manifest-table-header')} ref={forwardedRef} />
  ),
);
