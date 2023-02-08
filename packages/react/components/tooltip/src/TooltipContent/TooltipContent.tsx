import * as React from 'react';
import { useHover } from '@react-aria/interactions';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps, mergeRefs } from '@project44-manifest/react-utils';
import { useTooltipContext } from '../Tooltip.context';
import { StyledTooltipContent } from './TooltipContent.styles';
import type { TooltipContentElement, TooltipContentProps } from './TooltipContent.types';

export const TooltipContent = React.forwardRef((props, forwardedRef) => {
  const { className: classNameProp, children, ...other } = props;

  const { tooltipProps, tooltipRef, state } = useTooltipContext();

  const { hoverProps } = useHover({
    onHoverStart: () => void state?.open(true),
    onHoverEnd: () => void state?.close(),
  });

  return (
    <StyledTooltipContent
      {...mergeProps(other, tooltipProps, hoverProps)}
      ref={mergeRefs(tooltipRef, forwardedRef)}
      className={cx('manifest-tooltip', classNameProp)}
      role="tooltip"
    >
      {children}
    </StyledTooltipContent>
  );
}) as ForwardRefComponent<TooltipContentElement, TooltipContentProps>;
