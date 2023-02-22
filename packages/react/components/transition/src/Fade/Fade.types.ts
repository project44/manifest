import type { TransitionProps } from '../Transition.types';

export interface FadeProps extends Omit<TransitionProps, 'children'> {
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
