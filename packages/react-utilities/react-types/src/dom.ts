import * as React from 'react';

export interface DOMElement extends Element, HTMLOrSVGElement {}

export interface DOMAttributes<T = DOMElement>
	extends React.AriaAttributes,
		React.DOMAttributes<T> {
	className?: string | undefined;
	id?: string | undefined;
	role?: React.AriaRole | undefined;
	style?: React.CSSProperties | undefined;
	tabIndex?: number | undefined;
}
