import * as React from 'react';
import TransitionComponent from 'react-transition-group/Transition';
import { useMergedRef } from '@project44-manifest/use-merged-ref';
import type { TransitionProps, TransitionStatus } from './Transition.types';

const defaultTransitionStyle = (status: TransitionStatus) => {
  if (status === 'entered' || status === 'entering') {
    return { opacity: 1 };
  }

  return {};
};

export const Transition = React.forwardRef<HTMLElement, TransitionProps>((props, forwardedRef) => {
  const {
    appear = true,
    children,
    in: inProp,
    addEndListener,
    getTransitionStyle = defaultTransitionStyle,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    style,
    timeout = 250,
    ...other
  } = props;

  const nodeRef = React.useRef<HTMLElement>(null);
  const mergedRef = useMergedRef(nodeRef, forwardedRef);

  const handleEnter = React.useCallback(
    (isAppearing: boolean) => {
      if (nodeRef.current) {
        onEnter?.(nodeRef.current, isAppearing);
      }
    },
    [onEnter],
  );

  const handleEntering = React.useCallback(
    (isAppearing: boolean) => {
      if (nodeRef.current) {
        onEntering?.(nodeRef.current, isAppearing);
      }
    },
    [onEntering],
  );

  const handleEntered = React.useCallback(
    (isAppearing: boolean) => {
      if (nodeRef.current) {
        onEntered?.(nodeRef.current, isAppearing);
      }
    },
    [onEntered],
  );

  const handleExit = React.useCallback(() => {
    if (nodeRef.current) {
      onExit?.(nodeRef.current);
    }
  }, [onExit]);

  const handleExited = React.useCallback(() => {
    if (nodeRef.current) {
      onExited?.(nodeRef.current);
    }
  }, [onExited]);

  const handleExiting = React.useCallback(() => {
    if (nodeRef.current) {
      onExiting?.(nodeRef.current);
    }
  }, [onExiting]);

  const handleAddEndLister = React.useCallback(
    (done: () => void) => {
      if (nodeRef.current) {
        addEndListener?.(nodeRef.current, done);
      }
    },
    [addEndListener],
  );

  return (
    <TransitionComponent
      {...other}
      addEndListener={handleAddEndLister}
      appear={appear}
      in={inProp}
      timeout={timeout}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onEntering={handleEntering}
      onExit={handleExit}
      onExited={handleExited}
      onExiting={handleExiting}
    >
      {(status: TransitionStatus) =>
        React.cloneElement(children, {
          ref: (element: HTMLElement) => void mergedRef(element),
          style: {
            opacity: 0,
            transition: 'all 250ms ease-in-out',
            visibility: status === 'exited' && !inProp ? 'hidden' : undefined,
            ...getTransitionStyle(status),
            ...(children.props as TransitionProps).style,
          },
        })
      }
    </TransitionComponent>
  );
});
