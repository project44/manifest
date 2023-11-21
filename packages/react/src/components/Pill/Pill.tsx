import * as React from 'react';
import { useOverlayPosition } from '@react-aria/overlays';
import { useTooltip, useTooltipTrigger } from '@react-aria/tooltip';
import { mergeProps } from '@react-aria/utils';
import { useTooltipTriggerState } from '@react-stately/tooltip';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '../../system';
import type { StyleProps } from '../../types';
import { Typography } from '../Typography';
import { useStyles } from './Pill.styles';

export type PillElement = 'div';

export interface PillOptions<T extends As = PillElement> extends Options<T>, StyleProps {
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

export type PillProps<T extends As = PillElement> = Props<PillOptions<T>>;

export const Pill = createComponent<PillOptions>((props, forwaredRef) => {
  const {
    as: Comp = 'div',
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
    <Comp {...other} ref={forwaredRef} className={classes}>
      {icon && (
        <span {...triggerProps} ref={triggerRef} className="manifest-pill__icon">
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
    </Comp>
  );
});

Pill.displayName = 'Pill';
