import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';

export type TableFooterProps = StyleProps;

export const TableFooter = createComponent<'tfoot', TableFooterProps>(
  ({ className, ...other }, forwardedRef) => (
    <tfoot {...other} className={cx(className, 'manifest-table-footer')} ref={forwardedRef} />
  ),
);
