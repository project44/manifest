import * as React from 'react';
import TransitionComponent from 'react-transition-group/Transition';
import { cx } from '@project44-manifest/react-styles';
import { useMergedRef } from '@project44-manifest/use-merged-ref';
import type { TransitionProps, TransitionStatus } from './Transition.types';

export const Transition = React.forwardRef<HTMLElement, TransitionProps>((props, forwardedRef) => {
  const {
    children,
    className: classNameProp,
    in: inProp,
    addEndListener,
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

  const nodeRef = React.useRef<HTMLDivElement>(null);
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
      in={inProp}
      nodeRef={nodeRef}
      timeout={timeout}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onEntering={handleEntering}
      onExit={handleExit}
      onExited={handleExited}
      onExiting={handleExiting}
    >
      {(status: TransitionStatus) => {
        const className = cx(
          'manifest-transition',
          {
            'manifest-transition--entered': status === 'entered',
            'manifest-transition--entering': status === 'entering',
            'manifest-transition--exited': status === 'exited',
            'manifest-transition--exiting': status === 'exiting',
          },
          classNameProp,
        );

        if (typeof children === 'function') {
          return children(status, {
            className,
            ref: mergedRef,
          });
        }

        return React.cloneElement(children as React.ReactElement, {
          className,
          ref: mergedRef,
        });
      }}
    </TransitionComponent>
  );
});
