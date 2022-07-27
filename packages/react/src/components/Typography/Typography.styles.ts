import { css } from '../../styles';

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
  },

  defaultVariants: {
    variant: 'body',
  },
});
