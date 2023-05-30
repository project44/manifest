import { css } from '@project44-manifest/react-styles';

export const useStyles = css({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  margin: 0,
  padding: '$small $medium',
  flexDirection: 'row',

  '.manifest-calendar-header__text': {
    color: '$text-secondary',
    fontWeight: '$bold',
  },
});
