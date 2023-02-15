import * as React from 'react';
import { Transition } from '../Transition';
import { reflow } from '../utils';
import type { CollapseProps } from './Collapse.types';

export const Collapse = React.forwardRef<HTMLElement, CollapseProps>((props, forwardedRef) => {
  const {
    children,
    in: inProp,
    duration = 250,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    style,
    timeout = 250,
    ...other
  } = props;

  const handleEnter = React.useCallback(
    (node: HTMLElement, isAppearing: boolean) => {
      node.style.height = '0px';

      onEnter?.(node, isAppearing);
    },
    [onEnter],
  );

  const handleEntering = React.useCallback(
    (node: HTMLElement, isAppearing: boolean) => {
      const value = node.scrollHeight;

      node.style.height = `${value}px`;
      node.style.transition = `height ${duration}ms cubic-bezier(0.4, 0.14, 0.3, 1) 0ms`;

      onEntering?.(node, isAppearing);
    },
    [duration, onEntering],
  );

  const handleEntered = React.useCallback(
    (node: HTMLElement, isAppearing: boolean) => {
      node.style.height = 'auto';

      onEntered?.(node, isAppearing);
    },
    [onEntered],
  );

  const handleExit = React.useCallback(
    (node: HTMLElement) => {
      const value = node.scrollHeight;

      node.style.height = `${value}px`;

      onExit?.(node);
    },
    [onExit],
  );

  const handleExiting = React.useCallback(
    (node: HTMLElement) => {
      reflow(node);

      node.style.height = '0px';
      node.style.transition = `height ${duration}ms cubic-bezier(0.4, 0.14, 0.3, 1) 0ms`;

      onExiting?.(node);
    },
    [duration, onExiting],
  );

  return (
    <Transition
      {...other}
      ref={forwardedRef}
      in={inProp}
      timeout={timeout}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onEntering={handleEntering}
      onExit={handleExit}
      onExiting={handleExiting}
    >
      {(_, childrenProps: Record<string, unknown>) =>
        React.cloneElement(children, {
          ...childrenProps,
          style: {
            overflow: 'hidden',
            height: 0,
            ...style,
            ...(children.props as CollapseProps).style,
          },
        })
      }
    </Transition>
  );
});
