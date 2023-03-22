import { globalCss } from '@project44-manifest/react-styles';

export const useStyles = globalCss({
  '*, *:before, *:after': {
    boxSizing: 'border-box',
  },
});
