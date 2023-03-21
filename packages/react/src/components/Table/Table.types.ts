import type { CSS } from '@project44-manifest/react-styles';
import { TableContext } from './Table.context';

export type TableElement = 'table';

export interface TableProps extends TableContext {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Visually compact vertical spacing. Defaults to false
   */
  isDense?: boolean;
}
