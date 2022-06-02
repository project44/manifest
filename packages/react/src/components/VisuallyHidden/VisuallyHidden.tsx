import * as React from 'react';
import { useVisuallyHidden } from '@react-aria/visually-hidden';
import { mergeProps } from '@react-aria/utils';

export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Rendered element of the component.
   */
  as?: string | React.JSXElementConstructor<any>;
  /**
   * Content rendered within the visually hidden element.
   */
  children?: React.ReactNode;
  /**
   * Whether the element is focusabled.
   */
  isFocusable?: boolean;
}

export function VisuallyHidden(props: VisuallyHiddenProps) {
  const { as: Component = 'div', children, isFocusable, style, ...other } = props;

  const { visuallyHiddenProps } = useVisuallyHidden(props);

  return <Component {...mergeProps(other, visuallyHiddenProps)}>{children}</Component>;
}
