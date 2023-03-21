import { mergeProps } from '@react-aria/utils';
import { useVisuallyHidden } from '@react-aria/visually-hidden';
import { As, createComponent, Options, Props } from '../../system';
import type { StyleProps } from '../../types';

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
