import fs from 'fs-extra';
import path from 'path';
import prettier from 'prettier';
import ts from 'typescript';

function getSourceFileName(symbol) {
  const declarations = symbol.getDeclarations();

  if (!declarations || declarations.length === 0) {
    return undefined;
  }

  const sourceFile = declarations[0].getSourceFile();

  return sourceFile ? sourceFile.fileName : undefined;
}

function getComponentProps(typeExport, sourceFile, checker) {
  const result = {};

  const regexSearchTerm = typeof typeExport === 'string' ? `^${typeExport}$` : typeExport;

  const typeStatements = sourceFile.statements.filter(
    (statement) =>
      (ts.isInterfaceDeclaration(statement) || ts.isTypeAliasDeclaration(statement)) &&
      new RegExp(regexSearchTerm).test(statement.name.getText()),
  );

  for (const typeStatement of typeStatements) {
    const props = {};

    const type = checker.getTypeAtLocation(typeStatement);
    const properties = type.getProperties();

    for (const prop of properties) {
      const sourceFileName = getSourceFileName(prop);

      const isExternal = /(node_modules)/.test(sourceFileName);

      if (!isExternal) {
        const propType = checker.getTypeOfSymbolAtLocation(prop, sourceFile);
        const propName = prop.getName();
        const tags = prop.getJsDocTags();

        const description = prop
          .getDocumentationComment(checker)
          .map(({ text }) => text)
          .join('\n');

        const defaultValue =
          tags
            .find((tag) => tag.name === 'default')
            ?.text?.map((doc) => doc.text)
            ?.join('\n') || undefined;

        const nonNullableType = propType.getNonNullableType();
        const typeName = checker.typeToString(nonNullableType);
        const required = nonNullableType === propType && typeName !== 'any';

        const propRecord = {
          name: propName,
          type: typeName,
          defaultValue,
          required,
          description,
        };

        props[propName] = propRecord;
      }
    }

    let typeName = typeStatement.name.getText();

    if (typeName.endsWith('Props')) {
      typeName = typeName.replace(/Props$/, '');

      result[typeName] = props;
    }
  }

  return result;
}

/**
 *  We want to parse props from exported types so prop types must be named exports from the index src file
 *
 * @example
 *
 * export type { ButtonProps } from 'module'
 */
function getTypeExports(code) {
  const exported = {};

  const exportedTypeRegex = /export type\s*{([^}]+)}/g;

  let match = exportedTypeRegex.exec(code);

  while (match != null) {
    const types = match[1].split(',').map((s) => s.trim());

    types.forEach((type) => {
      const [typeName] = type.split(' ') ?? [];
      exported[typeName] = true;
    });

    match = exportedTypeRegex.exec(code);
  }

  const exportedTypes = Object.keys(exported).filter(Boolean);

  return exportedTypes;
}

/**
 * Generate component docs base on type exports
 *
 * Using typescript directly instead of react-docgen-typescript as it does not generate the types of
 * our polymorphic components.
 *
 * The following code is borrowed and adapted from chakra-ui:
 *
 * https://github.com/chakra-ui/chakra-ui/blob/main/scripts/generate-type-docs.ts
 */
export async function generatePropsDoc(componentName) {
  const srcPath = path.join('src', 'index.ts');
  const tsconfigPath = path.resolve('tsconfig.build.json');
  const fileSource = await fs.readFile(srcPath, 'utf8');

  const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
  const basePath = path.dirname(tsconfigPath);

  const { fileNames, options } = ts.parseJsonConfigFileContent(configFile.config, ts.sys, basePath);

  const program = ts.createProgram(fileNames, options);
  const sourceFiles = program.getSourceFiles();
  const checker = program.getTypeChecker();

  const typeExports = getTypeExports(fileSource)
    .map((typeExport) => {
      let result = {};

      for (const sourceFile of sourceFiles) {
        const componentProps = getComponentProps(typeExport, sourceFile, checker);

        result = { ...result, ...componentProps };
      }

      return result;
    })
    .filter((value) => Object.keys(value).length !== 0)
    .reduce((acc, value) => ({ ...acc, ...value }), {});

  const isEmpty = Object.keys(typeExports).length === 0;

  if (!isEmpty) {
    fs.writeFileSync(
      `docs/${componentName}.docs.json`,
      prettier.format(JSON.stringify(typeExports), { parser: 'json' }),
    );
  }
}
