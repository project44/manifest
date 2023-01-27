import glob from 'fast-glob';
import fs from 'fs-extra';
import path from 'path';

const ROOT_DIR = process.cwd();
const PROJECT_ROOT = path.join(ROOT_DIR, '..', '..');
const COMPONENT_PROPS_DOCS = path.join(PROJECT_ROOT, 'packages/!(node_modules)/**/docs.json');
const OUT_DIR = path.join(ROOT_DIR, 'static', 'generated');

async function propsDoc() {
  const files = await glob(COMPONENT_PROPS_DOCS, {
    absolute: true,
    onlyFiles: true,
  });

  await Promise.all(
    files.map(async (file) => {
      const fileContent = await fs.readFile(file, 'utf8');
      const components = await JSON.parse(fileContent);

      Object.keys(components).map((component) => {
        const fileName = `${component}.json`;
        const outPath = path.join(OUT_DIR, fileName);

        fs.ensureDirSync(OUT_DIR);
        fs.writeFileSync(outPath, JSON.stringify(components[component]));
      });
    }),
  );
}

try {
  await propsDoc();
} catch (error) {
  console.log(error);

  process.exit(1);
}
