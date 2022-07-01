import * as React from 'react';
import { CSS, cx, usePillStyles } from './Pill.styles';
import { useTooltip, useTooltipTrigger } from '@react-aria/tooltip';
import { mergeProps } from '@react-aria/utils';
import { Typography } from '../Typography';
import { useOverlayPosition } from '@react-aria/overlays';
import { useTooltipTriggerState } from '@react-stately/tooltip';

/**
 * -----------------------------------------------------------------------------------------------
 * Pill
 * -----------------------------------------------------------------------------------------------
 */

type PillElement = React.ElementRef<'div'>;
type PillNativeProps = React.ComponentPropsWithoutRef<'div'>;

interface PillProps extends PillNativeProps {
  /**
   * The color scheme of the pill
   *
   * @default 'indigo'
   */
  colorScheme?: 'indigo' | 'red';
  /**
   * Theme aware style object.
   */
  css?: CSS;
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

  const { className } = usePillStyles({ colorScheme, css, isCollapsible, isOpen });

  return (
    <div {...other} className={cx('manifest-pill', className, classNameProp)} ref={forwaredRef}>
      {icon && (
        <span {...triggerProps} className="manifest-pill--icon" ref={triggerRef}>
          {icon}
        </span>
      )}
      {isOpen && (
        <Typography
          {...mergeProps(contentProps, tooltipProps, isCollapsible ? positionProps : {})}
          className="manifest-pill--text"
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

Pill.toString = () => '.manifest-pill';

export { Pill };
export type { PillProps };
