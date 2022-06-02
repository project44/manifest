import { globalCss } from '../config';

export const globalStyles = globalCss({
  '*, *:before, *:after': {
    boxSizing: 'border-box',
    textRendering: 'geometricPrecision',
    WebkitTapHighlightColor: 'transparent',
  },
  'html, body': {
    backgroundColor: '$background-primary',
    color: '$text-primary',
  },
  html: {
    fontSize: '$medium',
  },
  body: {
    margin: 0,
    minHeight: '100%',
    MozOsxFontSmoothing: 'grayscale',
    overflowX: 'hidden',
    padding: 0,
    position: 'relative',
    textRendering: 'optimizeLegibility',
    typography: '$body',
    WebkitFontSmoothing: 'antialiased',
  },
  'b, strong': { fontWeight: '$bold' },
});
