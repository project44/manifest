import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import fs from 'fs-extra';
import path from 'path';
import postcss from 'postcss';
import sass from 'sass';

const ROOT_DIR = process.cwd();
const OUT_DIR = path.join(ROOT_DIR, 'lib');
const SRC_DIR = path.join(ROOT_DIR, 'src');

const loadPaths = [
  path.resolve(ROOT_DIR, 'src'),
  path.resolve(ROOT_DIR, '..', '..', '..', 'node_modules'),
];

async function createStyleSheet(fileName, plugins) {
  const { css } = await sass.compile(path.join(SRC_DIR, 'index.scss'), { loadPaths });
  const result = await postcss(plugins).process(css, {
    from: path.resolve(SRC_DIR, 'index.scss'),
  });

  await fs.ensureDir(OUT_DIR);
  await fs.writeFile(path.join(OUT_DIR, fileName), result.css);
}

try {
  await Promise.all([
    createStyleSheet('styles.css', [autoprefixer()]),
    createStyleSheet('styles.min.css', [autoprefixer(), cssnano({ preset: 'default' })]),
  ]);
} catch (error) {
  console.error(error);

  process.exit(1);
}
