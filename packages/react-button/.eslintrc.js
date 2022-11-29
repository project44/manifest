/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	extends: ['manifest'],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
};
