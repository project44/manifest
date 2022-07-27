module.exports = {
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
    navbar: {
      title: 'Manifest Design System',
    },
  },
};
