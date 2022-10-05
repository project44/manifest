// eslint-disable-next-line unicorn/prefer-module
const tsNode = require('ts-node');

tsNode.register({
	// eslint-disable-next-line unicorn/prefer-module
	cwd: __dirname,
	skipProject: true,
	transpileOnly: true,
});
