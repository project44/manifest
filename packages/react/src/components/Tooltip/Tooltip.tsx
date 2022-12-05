import * as React from 'react';
import { FocusableProvider } from '@react-aria/focus';
import { OverlayContainer, useOverlayPosition } from '@react-aria/overlays';
import { useTooltip, useTooltipTrigger } from '@react-aria/tooltip';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { useTooltipTriggerState } from '@react-stately/tooltip';
import type { OverlayTriggerProps } from '@react-types/overlays';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { Typography } from '../Typography';
import { useStyles } from './Tooltip.styles';

export type TooltipElement = 'div';

export interface TooltipOptions<T extends As = TooltipElement>
  extends Options<T>,
    OverlayTriggerProps,
    StyleProps {
  /**
   * The delay time for the tooltip to show up.
   *
   * @default 1000
   */
  delay?: number;
  /**
   * Whether the tooltip should be disabled, independent from the trigger.
   */
  isDisabled?: boolean;
  /**
   * The placement of the element with respect to its anchor element.
   *
   * @default 'top'
   */
  placement?: 'bottom' | 'end' | 'left' | 'right' | 'start' | 'top';
  /**
   * The content rendered within the tooltip.
   */
  title?: React.ReactNode;
}

export type TooltipProps<T extends As = TooltipElement> = Props<TooltipOptions<T>>;

export const Tooltip = createComponent<TooltipOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    children,
    className: classNameProp,
    css,
    delay = 1000,
    isDisabled,
    placement = 'top',
    title,
    ...other
  } = props;

  const [trigger] = React.Children.toArray(children);

  const overlayRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const state = useTooltipTriggerState({ ...props, delay });

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
            ref={mergeRefs(overlayRef, forwardedRef)}
            className={cx(className, classNameProp, 'manifest-tooltip')}
          >
            <Typography variant="caption">{title}</Typography>
          </Comp>
        </OverlayContainer>
      )}
    </FocusableProvider>
  );
});
