import { styled } from '../../styles';

export const StyledTypography = styled('span', {
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
      caption: { typography: '$caption' },
    },
  },

  defaultVariants: {
    variant: 'body',
  },
});
