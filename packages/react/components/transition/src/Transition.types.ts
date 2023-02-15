import * as React from 'react';
import type {
  EndHandler,
  EnterHandler,
  ExitHandler,
  TransitionStatus,
} from 'react-transition-group/Transition';

export type { TransitionStatus };

export interface TransitionProps<RefElement extends HTMLElement | undefined = undefined> {
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener?: EndHandler<RefElement>;
  /**
   * Normally a component is not transitioned if it is shown when the
   * `<Transition>` component mounts. If you want to transition on the first
   * mount set  appear to true, and the component will transition in as soon
   * as the `<Transition>` mounts. Note: there are no specific "appear" states.
   * appear only adds an additional enter transition.
   *
   * @default true
   */
  appear?: boolean | undefined;
  /**
   * An element or render function.
   */
  children:
    | React.ReactNode
    | ((status: TransitionStatus, props: Record<string, unknown>) => React.ReactNode);
  /**
   * Class name attaced to dom element.
   */
  className?: string;
  /**
   * Show the component; triggers the enter or exit states
   */
  in?: boolean;
  /**
   * By default the child component is mounted immediately along with the
   * parent Transition component. If you want to "lazy mount" the component on
   * the first `in={true}` you can set `mountOnEnter`. After the first enter
   * transition the component will stay mounted, even on "exited", unless you
   * also specify `unmountOnExit`.
   */
  mountOnEnter?: boolean;
  /**
   * Handler fired before the "entering" status is applied. An extra
   * parameter `isAppearing` is supplied to indicate if the enter stage is
   * occurring on the initial mount
   */
  onEnter?: EnterHandler<RefElement>;
  /**
   * Handler fired after the "entering" status is applied. An extra parameter
   * isAppearing is supplied to indicate if the enter stage is occurring on
   * the initial mount
   */
  onEntering?: EnterHandler<RefElement>;
  /**
   * Handler fired after the "entered" status is applied. An extra parameter
   * isAppearing is supplied to indicate if the enter stage is occurring on
   * the initial mount
   */
  onEntered?: EnterHandler<RefElement>;
  /**
   * Handler fired before the "exiting" status is applied.
   */
  onExit?: ExitHandler<RefElement>;
  /**
   * Handler fired after the "exiting" status is applied.
   */
  onExiting?: ExitHandler<RefElement>;
  /**
   * Handler fired after the "exited" status is applied.
   */
  onExited?: ExitHandler<RefElement>;
  /**
   * A React reference to DOM element that need to transition: https://stackoverflow.com/a/51127130/4671932
   * When `nodeRef` prop is used, node is not passed to callback functions (e.g. onEnter) because user already has direct access to the node.
   * When changing `key` prop of `Transition` in a `TransitionGroup` a new `nodeRef` need to be provided to `Transition` with changed `key`
   * prop (@see https://github.com/reactjs/react-transition-group/blob/master/test/Transition-test.js).
   */
  nodeRef?: React.Ref<HTMLElement> | undefined;
  /**
   * Style object.
   */
  style?: React.CSSProperties;
  /**
   * The duration of the transition, in milliseconds. Required unless addEndListener is provided.
   *
   * You may specify a single timeout for all transitions:
   * ```js
   *   timeout={500}
   * ```
   * or individually:
   * ```js
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   * - appear defaults to the value of `enter`
   * - enter defaults to `0`
   * - exit defaults to `0`
   *
   * @default 250
   */
  timeout?: number | { appear?: number; enter?: number; exit?: number };
  /**
   * By default the child component stays mounted after it reaches the
   * 'exited' state. Set `unmountOnExit` if you'd prefer to unmount the
   * component after it finishes exiting.
   */
  unmountOnExit?: boolean;
}
