const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

require('dotenv').config();

const config = {
  title: 'Manifest Design System',
  tagline: 'Manifesting experiences through design',
  favicon: 'img/favicon.ico',
  url: 'https://project44.github.io',
  baseUrl: '/manifest/',
  organizationName: 'project44',
  projectName: 'manifest',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  stylesheets: ['https://fonts.googleapis.com/icon?family=Material+Icons'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: ['@docusaurus/theme-live-codeblock', 'docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      {
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/project44/manifest/tree/main/website',
          routeBasePath: '/',
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('../../node_modules/normalize.css/normalize.css'),
            require.resolve('./src/styles/custom.scss'),
          ],
        },
      },
    ],
  ],
  themeConfig: {
    algolia: {
      appId: 'R83KK3IWHV',
      apiKey: '5132717c5548f16a15ad365188c00574',
      indexName: 'manifestdesignsystem',
      contextualSearch: true,
    },
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
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
