import * as React from 'react';
import { reflow } from '../../utils';
import type { TransitionStatus } from '../Transition';
import { Transition } from '../Transition';
import type { FadeProps } from './Fade.types';

const styles: Record<TransitionStatus, React.CSSProperties> = {
  entered: {
    opacity: 1,
  },
  entering: {
    opacity: 1,
  },
  exited: {},
  exiting: {},
  unmounted: {},
};

export const Fade = React.forwardRef<HTMLElement, FadeProps>((props, forwardedRef) => {
  const {
    children,
    in: inProp,
    duration = 200,
    onEnter,
    onExit,
    style,
    timeout = 200,
    ...other
  } = props;

  const handleEnter = React.useCallback(
    (node: HTMLElement, isAppearing: boolean) => {
      reflow(node);

      node.style.transition = `opacity ${duration}ms cubic-bezier(0.4, 0.14, 0.3, 1) 0ms`;

      onEnter?.(node, isAppearing);
    },
    [duration, onEnter],
  );

  const handleExit = React.useCallback(
    (node: HTMLElement) => {
      node.style.transition = `opacity ${duration}ms cubic-bezier(0.4, 0.14, 0.3, 1) 0ms`;

      onExit?.(node);
    },
    [duration, onExit],
  );

  return (
    <Transition
      {...other}
      ref={forwardedRef}
      in={inProp}
      timeout={timeout}
      onEnter={handleEnter}
      onExit={handleExit}
    >
      {(status: TransitionStatus, childrenProps: Record<string, unknown>) => (
        <div
          {...childrenProps}
          style={{
            opacity: 0,
            visibility: status === 'exited' && !inProp ? 'hidden' : undefined,
            ...styles[status],
            ...style,
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
});

Fade.displayName = 'Fade';
