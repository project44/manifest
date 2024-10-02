import { css } from '@project44-manifest/react-styles';

export const useStyles = css({
  margin: '0',

  variants: {
    paragraph: {
      true: {
        marginBottom: '$medium',
      },
    },
    variant: {
      display: { typography: '$display' },
      heading: { typography: '$heading' },
      title: { typography: '$title' },
      subtitle: { typography: '$subtitle' },
      body: { typography: '$body' },
      bodyBold: { typography: '$body-bold' },
      subtext: { typography: '$subtext' },
      subtextBold: { typography: '$subtext-bold' },
      caption: { typography: '$caption' },
      captionBold: { typography: '$caption-bold' },
    },
    color: {
      primary: { color: '$text-primary' },
      secondary: { color: '$text-secondary' },
      tertiary: { color: '$text-tertiary' },
    },
  },

  defaultVariants: {
    variant: 'body',
  },
});
