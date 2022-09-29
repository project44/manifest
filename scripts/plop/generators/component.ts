import path from 'node:path';
import type { Actions, PlopGeneratorConfig } from 'node-plop';

interface Answers {
	componentName: string;
	description: string;
}

// eslint-disable-next-line unicorn/prefer-module
const OUT_PUT_DIR = path.join(__dirname, '../../../packages');

export const componentGenerator: PlopGeneratorConfig = {
	description: 'Create a new component',
	prompts: [
		{
			type: 'input',
			name: 'componentName',
			message: 'What is the component name? please use start casing (e.g. TestComponent)',
		},
		{
			type: 'input',
			name: 'description',
			message: 'What is the component description?',
		},
	],
	actions: (data) => {
		const { componentName, description } = data as Answers;

		const actions: Actions = [
			{
				type: 'addMany',
				destination: `${OUT_PUT_DIR}/react-components/{{dashCase componentName}}`,
				data: {
					componentName,
					description,
				},
				templateFiles: './templates/component/**',
				base: './templates/component/',
			},
		];

		return actions;
	},
};
