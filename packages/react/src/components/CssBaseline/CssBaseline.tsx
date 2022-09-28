import * as React from 'react';
import { useStyles } from './CssBaseline.styles';

export const CssBaseline = React.memo<React.PropsWithChildren<unknown>>((props) => {
	const { children } = props;

	useStyles();

	return <>{children}</>;
});
