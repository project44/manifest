import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	external: ['jest'],
	format: ['cjs', 'esm'],
	entry: ['src/index.ts'],
	tsconfig: 'tsconfig.build.json',
});
