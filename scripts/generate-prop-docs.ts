import fs from 'fs-extra';
import glob from 'fast-glob';
import path from 'path';
import prettier from 'prettier';
import { withCustomConfig } from 'react-docgen-typescript';
import yargs from 'yargs';

interface PropDoc {
  description: string;
  defaultValue: any;
  name: string;
  required: boolean;
  type: string;
}

interface ComponentDoc {
  displayName: string;
  props: PropDoc[];
}

const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'packages', 'react', 'src');
const OUT_DIR = path.join(ROOT_DIR, 'apps', 'docs', 'src');

async function main() {
  const files = await glob(path.join(SRC_DIR, '**/*.tsx'), {
    ignore: [path.join(SRC_DIR, '**/*.{context,spec,stories}.tsx')],
  });

  const { parse } = withCustomConfig(path.resolve(ROOT_DIR, 'tsconfig.json'), {
    shouldExtractLiteralValuesFromEnum: true,
  });

  const _docs = parse(files);
  const docs = _docs.reduce<ComponentDoc[]>((acc, doc) => {
    if (!Object.keys(doc.props || {}).length) {
      return acc;
    }

    const { displayName, props: _props } = doc;

    const props = Object.keys(_props)
      .sort()
      .map(prop => {
        const {
          defaultValue: _defaultValue,
          description,
          name,
          required,
          type: _type,
        } = _props[prop];

        const defaultValue = _defaultValue?.value ?? '';
        const type = (_type.name === 'enum' ? _type.raw ?? '' : _type.name).replace(
          '| undefined',
          '',
        );

        return {
          defaultValue,
          description:
            name === 'as' ? 'The DOM tag or react component to use for the element.' : description,
          name,
          required,
          type,
        };
      });

    acc = [...acc, { displayName, props }];

    return acc;
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
