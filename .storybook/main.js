module.exports = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  core: { builder: 'webpack5' },
  staticDirs: ['public'],
  stories: ['../packages/react/src/components/**/*.stories.tsx'],
};
