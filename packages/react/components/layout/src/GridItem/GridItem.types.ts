import type * as CSSType from 'csstype';
import type { CSS } from '@project44-manifest/react-styles';

export type GridItemElement = 'div';

export interface GridItemProps {
  /**
   * Shorthand for the gridArea css property.
   */
  area?: CSSType.Property.GridArea;
  /**
   * Shorthand for the gridColumn css property.
   */
  column?: CSSType.Property.GridColumn;
  /**
   * Shorthand for the gridColumnEnd css property.
   */
  columnEnd?: CSSType.Property.GridColumnEnd;
  /**
   * Shorthand for the gridColumnStart css property.
   */
  columnStart?: CSSType.Property.GridColumnStart;
  /** Theme aware style object */
  css?: CSS;
  /**
   * Shorthand for the order css property.
   */
  order?: CSSType.Property.Order;
  /**
   * Shorthand for the gridRow css property.
   */
  row?: CSSType.Property.GridRow;
  /**
   * Shorthand for the gridRowEnd css property.
   */
  rowEnd?: CSSType.Property.GridRowEnd;
  /**
   * Shorthand for the gridRowStart css property.
   */
  rowStart?: CSSType.Property.GridRowStart;
}
