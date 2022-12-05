import { globalCss } from '@project44-manifest/react';

export const useStyles = globalCss({
  '.npm__react-simple-code-editor__textarea:focus-visible': {
    outline: 'none',
  },

  '.npm__react-simple-code-editor__textarea': {
    backgroundColor: '$background-secondary !important',
  },
});
