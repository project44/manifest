import { makeStyles, pxToRem } from '@project44-manifest/react-styles';
import { IconButtonProps } from './IconButton.types';

export const useStyles = makeStyles<IconButtonProps>((_, { size }) => ({
	root: {
		justifyContent: 'center',

		...(size === 'medium' && { p: '$small' }),
		...(size === 'small' && { p: pxToRem(3) }),
	},
}));
