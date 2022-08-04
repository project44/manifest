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
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          editUrl: 'https://github.com/project44/manifest/tree/main/packages/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
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
