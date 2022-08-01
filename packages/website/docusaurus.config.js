/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Manifest Design System',
  tagline: 'Manifesting experiences through design.',
  url: 'https://p44design.systems/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'project44',
  projectName: 'manifest',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/project44/manifest/tree/main/packages/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-react-docgen-typescript',
      {
        src: ['../react/src/**/**.{ts,tsx}'],
        global: true,
        parserOptions: {
          shouldExtractLiteralValuesFromEnum: true,
          shouldRemoveUndefinedFromOptional: true,
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Manifest Design System',
        src: 'img/logo.png',
      },
      hideOnScroll: true,
      items: [
        // { to: 'docs/', label: 'Docs', position: 'right' },
        // { to: 'help', label: 'Help', position: 'right' },
        // { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/project44/manifest',
          label: 'GitHub',
          position: 'right',
        },
        { type: 'search', position: 'right' },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      defaultLanguage: 'typescript',
    },
  },
};

module.exports = config;
