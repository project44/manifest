import type { TransitionProps } from '../Transition.types';

export interface CollapseProps extends Omit<TransitionProps, 'children'> {
  /**
   * A single child element.
   */
  children: React.ReactElement;
  /**
   * The animation duration in miliseconds.
   *
   * @default 200
   */
  duration?: number;
}
