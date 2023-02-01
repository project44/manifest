import { create } from '@storybook/theming';
import PackageJSON from '../../../packages/react/package.json';

export default create({
  base: 'light',
  fontBase:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  fontCode: '"Fira Mono", Courier, monospace',
  brandTitle: `@projectt44-manfiest/react@${PackageJSON.version}`,
  brandUrl: 'https://github.com/project44/manifest/tree/main/packages/react',
});
