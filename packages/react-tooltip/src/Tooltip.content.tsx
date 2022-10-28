import * as React from 'react';
import { createPortal } from 'react-dom';
import type { HTMLMotionProps } from 'framer-motion';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledTooltip } from './Tooltip.styles';
import type { TooltipElement, TooltipProps } from './Tooltip.types';

export const TooltipContent = React.forwardRef((props, forwardedRef) => {
	const { className: classNameProp, children, title, ...other } = props;

	const contents = (
		<StyledTooltip
			ref={forwardedRef}
			animate={{ opacity: 1 }}
			className={cx('manifest-tooltip', classNameProp)}
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			transition={{ ease: 'easeIn', duration: 0.15 }}
			{...(other as HTMLMotionProps<'div'>)}
		>
			{children}
		</StyledTooltip>
	);

	return createPortal(contents, document.body);
}) as ForwardRefComponent<TooltipElement, TooltipProps>;
