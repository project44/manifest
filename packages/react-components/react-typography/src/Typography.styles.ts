import { makeStyles } from '@project44-manifest/react-styles';
import { TypographyProps } from './Typography.types';

export const useStyles = makeStyles<TypographyProps>((_, { paragraph, variant = 'body' }) => ({
	root: {
		margin: '0',

		...(paragraph && { marginBottom: '$medium' }),
		...(variant === 'body' && { typography: '$body' }),
		...(variant === 'bodyBold' && { typography: '$body-bold' }),
		...(variant === 'caption' && { typography: '$caption' }),
		...(variant === 'captionBold' && { typography: '$caption-bold' }),
		...(variant === 'display' && { typography: '$display' }),
		...(variant === 'heading' && { typography: '$heading' }),
		...(variant === 'subtext' && { typography: '$subtext' }),
		...(variant === 'subtextBold' && { typography: '$subtext-bold' }),
		...(variant === 'subtitle' && { typography: '$subtitle' }),
		...(variant === 'title' && { typography: '$title' }),
	},
}));
