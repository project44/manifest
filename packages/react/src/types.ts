import type { CSS } from './styles';

export interface ManifestProps {
  /**
   * Rendered element of the component.
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Classname applied to the root element.
   */
  className?: string;
  /**
   * Styles applied to the radio group.
   */
  css?: CSS;
}
