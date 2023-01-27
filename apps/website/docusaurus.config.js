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
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Manifest Design System',
        logo: {
          alt: 'Manifest Design System',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'foundations/overview',
            label: 'Foundations',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'components/overview',
            label: 'Components',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'tokens/overview',
            label: 'Tokens',
            position: 'left',
          },
          {
            href: 'https://github.com/project44/manifest',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Foundations',
                to: 'docs/foundations/overview',
              },
              {
                label: 'Components',
                to: 'docs/components/overview',
              },
              {
                label: 'Tokens',
                to: 'docs/tokens/overview',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Figma',
                href: 'https://www.figma.com/file/2vyIjgJEhVc1spMWwkgzQ5/Manifest-Design-System',
              },
            ],
          },
          {
            title: 'Development',
            items: [
              {
                label: 'Report a bug',
                href: 'https://github.com/project44/manifest/issues/',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/project44/manifest/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'project44',
                href: 'https://www.project44.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/project44/manifest',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} project44`,
      },
    }),
};

module.exports = config;
