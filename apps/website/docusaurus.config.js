/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manifest Design System',
  tagline: 'Manifesting experiences through design',
  favicon: 'img/favicon.ico',
  url: 'https://manifestdesignsystem.com',
  baseUrl: '/',
  organizationName: 'project44',
  projectName: 'manifest',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/project44/manifest/tree/main/website',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/project44/manifest/tree/main/website',
        },
        theme: {
          customCss: [
            require.resolve('../../node_modules/normalize.css/normalize.css'),
            require.resolve('./src/styles/custom.scss'),
          ],
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Manifest Design System',
        logo: {
          alt: 'Manifest Design System',
          src: 'img/logo.svg',
        },
      },
      colorMode: {
        disableSwitch: true,
      },
      footer: {},
    }),
};

module.exports = config;
