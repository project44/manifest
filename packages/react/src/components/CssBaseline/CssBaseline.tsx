import { memo } from 'react';
import { useStyles } from './CssBaseline.styles';

export const CssBaseline = memo<React.PropsWithChildren<unknown>>((props) => {
	const { children } = props;

	useStyles();

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>;
});
