import * as React from 'react';
import { Transition } from '@project44-manifest/react-transition';
import type { TooltipTransitionElement, TooltipTransitionProps } from './TooltipTransition.types';

export const TooltipTransition = React.forwardRef<TooltipTransitionElement, TooltipTransitionProps>(
  (props, forwardedRef) => {
    const { children, in: inProp, ...other } = props;

    const [exited, setExited] = React.useState(!inProp);

    const handleEntered = React.useCallback(() => {
      setExited(false);
    }, []);

    const handleExited = React.useCallback(() => {
      setExited(true);
    }, []);

    const mounted = inProp || !exited;

    if (!mounted) return null;

    return (
      <Transition
        {...other}
        ref={forwardedRef}
        in={inProp}
        onEntered={handleEntered}
        onExited={handleExited}
      >
        {children}
      </Transition>
    );
  },
);
