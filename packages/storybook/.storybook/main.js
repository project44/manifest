module.exports = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  staticDirs: ['public'],
  stories: ['../src/**/*.stories.*'],
};
