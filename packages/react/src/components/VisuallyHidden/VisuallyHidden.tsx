import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { mergeProps } from '@react-aria/utils';
import { useVisuallyHidden } from '@react-aria/visually-hidden';

export type VisuallyHiddenElement = 'div';

export interface VisuallyHiddenOptions<T extends As = VisuallyHiddenElement>
  extends Options<T>,
    StyleProps {
  /**
   * Whether the element should become visible on focus, for example skip links.
   */
  isFocusable?: boolean;
}

export type VisuallyHiddenProps<T extends As = VisuallyHiddenElement> = Props<
  VisuallyHiddenOptions<T>
>;

export const VisuallyHidden = createComponent<VisuallyHiddenOptions>((props, forwardedRef) => {
  const { as: Comp = 'div', isFocusable, ...other } = props;

  const { visuallyHiddenProps } = useVisuallyHidden(props);

  return <Comp {...mergeProps(visuallyHiddenProps, other)} ref={forwardedRef} />;
});
