import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	dts: true,
	entry: ['src/index.ts'],
	external: ['react', 'react-dom'],
	format: ['cjs', 'esm'],
	tsconfig: 'tsconfig.build.json',
});
