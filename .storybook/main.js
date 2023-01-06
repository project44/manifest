module.exports = {
	addons: ['@storybook/addon-a11y'],
	core: { builder: 'webpack5' },
	staticDirs: ['public'],
	stories: ['../../../packages/**/stories/*.stories.@(js|jsx|ts|tsx|mdx)'],
	typescript: {
		reactDocgen: 'none',
	},
};
