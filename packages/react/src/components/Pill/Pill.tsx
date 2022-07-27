import { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { useTooltip, useTooltipTrigger } from '@react-aria/tooltip';
import { cx } from '../../styles';
import { mergeProps } from '@react-aria/utils';
import { Typography } from '../Typography';
import { useOverlayPosition } from '@react-aria/overlays';
import { useStyles } from './Pill.styles';
import { useTooltipTriggerState } from '@react-stately/tooltip';

type PillElement = React.ElementRef<'div'>;

interface PillProps extends DOMProps, StyleProps {
  /**
   * The color scheme of the pill
   *
   * @default 'indigo'
   */
  colorScheme?: 'indigo' | 'red';
  /**
   * The icon to render in the pill.
   */
  icon?: React.ReactNode;
  /**
   * Whether the pill is collapsible.
   *
   * @default 'false'
   */
  isCollapsible?: boolean;
  /**
   * The text label of the pill.
   */
  label?: React.ReactNode;
}

const Pill = React.forwardRef<PillElement, PillProps>((props, forwaredRef) => {
  const {
    className: classNameProp,
    colorScheme = 'indigo',
    css,
    icon,
    isCollapsible = false,
    label,
    ...other
  } = props;

  const overlayRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const state = useTooltipTriggerState({ isDisabled: !isCollapsible, delay: 0 });

  const { triggerProps, tooltipProps: contentProps } = useTooltipTrigger(
    { isDisabled: !isCollapsible },
    state,
    triggerRef,
  );

  const { overlayProps: positionProps } = useOverlayPosition({
    isOpen: state.isOpen,
    offset: 4,
    overlayRef,
    placement: 'end',
    targetRef: triggerRef,
  });

  const { tooltipProps } = useTooltip({ isOpen: state.isOpen }, state);

  const isOpen = isCollapsible ? state.isOpen : true;

  const { className } = useStyles({ colorScheme, css, isCollapsible, isOpen });

  const classes = cx(className, classNameProp, {
    'manifest-pill': true,
    'manifest-pill--open': isOpen,
    'manifest-pill--collapsible': isCollapsible,
  });

  return (
    <div {...other} className={classes} ref={forwaredRef}>
      {icon && (
        <span {...triggerProps} className="manifest-pill__icon" ref={triggerRef}>
          {icon}
        </span>
      )}
      {isOpen && (
        <Typography
          {...mergeProps(contentProps, tooltipProps, isCollapsible ? positionProps : {})}
          className="manifest-pill__text"
          variant="captionBold"
        >
          {label}
        </Typography>
      )}
    </div>
  );
});

if (__DEV__) {
  Pill.displayName = 'Pill';
}

export { Pill };
export type { PillProps };
