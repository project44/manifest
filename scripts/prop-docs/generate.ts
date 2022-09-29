import path from 'node:path';
import { withCustomConfig } from 'react-docgen-typescript';
import glob from 'fast-glob';
import fs from 'fs-extra';
import prettier from 'prettier';
import yargs from 'yargs';

interface PropDoc {
	description: string;
	defaultValue: string;
	name: string;
	required: boolean;
	type: string;
}

interface ComponentDoc {
	displayName: string;
	props: PropDoc[];
}

// eslint-disable-next-line unicorn/prefer-module
const ROOT_DIR = path.join(__dirname, '../..');
const SRC_DIR = path.join(ROOT_DIR, 'packages', 'react', 'src');
const OUT_DIR = path.join(ROOT_DIR, 'apps', 'docs', 'src');

async function main() {
	const files = await glob(path.join(SRC_DIR, '**/*.tsx'));

	const { parse } = withCustomConfig(path.resolve(ROOT_DIR, 'tsconfig.json'), {
		shouldExtractLiteralValuesFromEnum: true,
		propFilter: (prop) => {
			const isReactProp = prop.parent?.fileName.includes('node_module/react') ?? false;

			return !isReactProp;
		},
	});

	const docs = parse(files).reduce<ComponentDoc[]>((acc, doc) => {
		if (Object.keys(doc.props || {}).length === 0) {
			return acc;
		}

		let newAcc = [...acc];

		const { displayName, props } = doc;

		const formattedProps = Object.keys(props)
			.sort()
			.map((prop) => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				const { defaultValue, description, name, required, type } = props[prop];

				return {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
					defaultValue: defaultValue?.value ?? '',
					description:
						name === 'as' ? 'The DOM tag or react component to use for the element.' : description,
					name,
					required,
					type: (type.name === 'enum' ? type.raw ?? '' : type.name).replace('| undefined', ''),
				};
			});

		newAcc = [...newAcc, { displayName, props: formattedProps }];

		return newAcc;
	}, []);

	const types = `
export interface PropDoc {
  description: string;
  defaultValue: any;
  name: string;
  required: boolean;
  type: string;
}

export interface ComponentDoc {
  displayName: string;
  props: PropDoc[];
}
  `;

	const components = `export const props: ComponentDoc[] = ${JSON.stringify(docs)};`;

	fs.ensureDirSync(path.join(OUT_DIR, 'data'));

	await fs.writeFile(
		path.join(OUT_DIR, 'data/props.ts'),
		prettier.format(`${types}\n${components}`, {
			parser: 'typescript',
			printWidth: 100,
			semi: true,
			singleQuote: true,
			tabWidth: 2,
			trailingComma: 'all',
			useTabs: false,
		}),
	);
}

void yargs
	.command({
		command: '$0',
		handler: main,
	})
	.help()
	.strict(true)
	.version(false)
	.parse();
