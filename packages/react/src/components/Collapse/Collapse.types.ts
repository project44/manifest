import type { TransitionProps } from '../Transition/Transition.types';

export interface CollapseProps extends Omit<TransitionProps, 'children'> {
  /**
   * Content of the transitioned element.
   */
  children: React.ReactNode;
  /**
   * The animation duration in miliseconds.
   *
   * @default 200
   */
  duration?: number;
}
