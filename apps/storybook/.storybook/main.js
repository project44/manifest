module.exports = {
	addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
	core: { builder: 'webpack5' },
	staticDirs: ['public'],
	stories: [
		'../../../packages/**/stories/*.stories.@(js|jsx|ts|tsx|mdx)',
		'../../../packages/react-components/**/stories/*.stories.@(js|jsx|ts|tsx|mdx)',
	],
};
