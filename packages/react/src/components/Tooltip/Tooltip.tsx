import type { OverlayTriggerProps } from '@react-types/overlays';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { useTooltip, useTooltipTrigger } from '@react-aria/tooltip';
import { FocusableProvider } from '@react-aria/focus';
import { OverlayContainer } from '@react-aria/overlays';
import { Typography } from '../Typography';
import { useOverlayPosition } from '@react-aria/overlays';
import { useStyles } from './Tooltip.styles';
import { useTooltipTriggerState } from '@react-stately/tooltip';

export interface TooltipProps extends OverlayTriggerProps, StyleProps {
  /**
   * Whether the tooltip should be disabled, independent from the trigger.
   */
  isDisabled?: boolean;
  /**
   * The placement of the element with respect to its anchor element.
   *
   * @default 'top'
   */
  placement?: 'start' | 'end' | 'right' | 'left' | 'top' | 'bottom';
  /**
   * The content rendered within the tooltip.
   */
  title?: React.ReactNode;
}

export const Tooltip = createComponent<'div', TooltipProps>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    children,
    className: classNameProp,
    css,
    isDisabled,
    placement = 'top',
    title,
    ...other
  } = props;

  const [trigger] = React.Children.toArray(children);

  const overlayRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const state = useTooltipTriggerState({ ...props, delay: 1000 });

  const { triggerProps, tooltipProps: contentProps } = useTooltipTrigger(
    { isDisabled },
    state,
    triggerRef,
  );
  const { overlayProps: positionProps } = useOverlayPosition({
    isOpen: state.isOpen,
    offset: 4,
    overlayRef,
    placement,
    targetRef: triggerRef,
  });
  const { tooltipProps } = useTooltip({ isOpen: state.isOpen }, state);

  const { className } = useStyles({ css });

  return (
    <FocusableProvider {...triggerProps} ref={triggerRef}>
      {trigger}
      {state.isOpen && (
        <OverlayContainer>
          <Comp
            {...mergeProps(tooltipProps, positionProps, contentProps, other)}
            className={cx(className, classNameProp, 'manifest-tooltip')}
            ref={mergeRefs(overlayRef, forwardedRef)}
          >
            <Typography variant="caption">{title}</Typography>
          </Comp>
        </OverlayContainer>
      )}
    </FocusableProvider>
  );
});
