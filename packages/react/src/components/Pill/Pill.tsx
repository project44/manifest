import type { ManifestProps } from '../../types';
import * as React from 'react';
import { cx, VariantProps } from '../../styles';
import { StyledIcon, StyledPill, StyledText } from './Pill.styles';
import { useTooltip, useTooltipTrigger } from '@react-aria/tooltip';
import { mergeProps } from '@react-aria/utils';
import { useOverlayPosition } from '@react-aria/overlays';
import { useTooltipTriggerState } from '@react-stately/tooltip';

type PillElement = React.ElementRef<typeof StyledPill>;
type PillNativeProps = React.ComponentPropsWithoutRef<typeof StyledPill>;
type PillVariantProps = VariantProps<typeof StyledPill>;

export interface PillProps extends ManifestProps, PillNativeProps, PillVariantProps {
  /**
   * The icon to render in the pill.
   */
  icon?: React.ReactNode;
  /**
   * Whether the pill is collpased by default.
   */
  isCollapsed?: boolean;
  /**
   * The text label of the pill.
   */
  label?: React.ReactNode;
}

export const Pill = React.forwardRef<PillElement, PillProps>((props, forwaredRef) => {
  const { as, className, css, icon, isCollapsed = false, label, ...other } = props;

  const overlayRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const state = useTooltipTriggerState({ isDisabled: !isCollapsed, delay: 0 });

  const { triggerProps, tooltipProps: contentProps } = useTooltipTrigger(
    { isDisabled: !isCollapsed },
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

  const isOpen = isCollapsed ? state.isOpen : true;

  return (
    <StyledPill
      {...other}
      as={as}
      className={cx('manifest-pill', className)}
      css={css}
      isOpen={isOpen}
      ref={forwaredRef}
    >
      {icon && (
        <StyledIcon {...triggerProps} ref={triggerRef}>
          {icon}
        </StyledIcon>
      )}
      {isOpen && (
        <StyledText
          {...mergeProps(contentProps, tooltipProps, isCollapsed ? positionProps : {})}
          variant="captionBold"
        >
          {label}
        </StyledText>
      )}
    </StyledPill>
  );
});
