import * as React from 'react';
import { createPortal } from 'react-dom';
import { HTMLMotionProps, motion } from 'framer-motion';
import { styled } from '@project44-manifest/react-styles';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { TooltipElement, TooltipProps } from './Tooltip.types';

const StyledMotion = styled(motion.div);

export const TooltipContent = React.forwardRef((props, forwardedRef) => {
	const { children, title, ...other } = props;

	const contents = (
		<StyledMotion
			ref={forwardedRef}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			transition={{ ease: 'easeIn', duration: 0.15 }}
			{...(other as HTMLMotionProps<'div'>)}
		>
			{children}
		</StyledMotion>
	);

	return createPortal(contents, document.body);
}) as ForwardRefComponent<TooltipElement, TooltipProps>;
