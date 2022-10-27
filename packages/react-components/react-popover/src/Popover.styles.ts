import { makeStyles } from '@project44-manifest/react-styles';

export const useStyles = makeStyles({
	root: {},
	surface: {
		backgroundColor: '$background-surface',
		borderRadius: '$small',
		boxSizing: 'border-box',
		boxShadow: '$medium',
		display: 'inline-flex',
		flexDirection: 'column',
		outline: 0,
		overflowY: 'auto',
		overflowX: 'hidden',

		'&[data-focus-visible]': {
			outline: '$colors$palette-indigo-200 solid 2px',
		},
	},
});
