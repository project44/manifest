import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { mergeProps } from '@react-aria/utils';
import { useVisuallyHidden } from '@react-aria/visually-hidden';

export interface VisuallyHiddenProps {
  /**
   * Whether the element should become visible on focus, for example skip links.
   */
  isFocusable?: boolean;
}

export const VisuallyHidden = createComponent<'div', VisuallyHiddenProps>((props, forwardedRef) => {
  const { as: Comp = 'div', isFocusable, ...other } = props;

  const { visuallyHiddenProps } = useVisuallyHidden(props);

  return <Comp {...mergeProps(visuallyHiddenProps, other)} ref={forwardedRef} />;
});
