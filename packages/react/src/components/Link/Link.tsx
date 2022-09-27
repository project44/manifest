import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './Link.styles';

export type LinkElement = 'a';
export type LinkOptions<T extends As = LinkElement> = Options<T> & StyleProps;
export type LinkProps<T extends As = LinkElement> = Props<LinkOptions<T>>;

export const Link = createComponent<LinkOptions>((props, forwardedRef) => {
	const { as: Comp = 'a', children, className: classNameProp, css, ...other } = props;

	const { className } = useStyles({ css });

	return (
		<Comp {...other} className={cx(className, classNameProp, 'manifest-link')} ref={forwardedRef}>
			{children}
		</Comp>
	);
});
