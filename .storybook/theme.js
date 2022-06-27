import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#3142c8',
  colorSecondary: '#3142c8',

  // UI
  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appBorderColor: '#e4e6e7',
  appBorderRadius: '2px',

  // Typography
  fontBase:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  fontCode: '"Fira Mono", Courier, monospace',

  // Text colors
  textColor: '#091521',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#091521',
  barSelectedColor: '#3142c8',

  // Form colors
  inputBorder: '#FFFFFF',
  inputTextColor: '#091521',
  inputBorderRadius: '2px',

  //branding
  brandTitle: 'Manifest Design System',
  brandUrl: 'https://p44design.systems',
  brandImage: '',
});
