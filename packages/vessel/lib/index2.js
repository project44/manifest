'use strict';

const core = require('@beemo/core');

const EXTS = ['.ts', '.tsx', '.js', '.jsx'];

function hasNoParams(context, name) {
  const params = context.args.params;
  return params.length === 0 || params.length === 1 && params[0] === name;
}

function vessel(tool) {
  const usingTypeScript = tool.driverRegistry.isRegistered('typescript');
  const workspacePrefixes = tool.project.getWorkspaceGlobs({
    relative: true
  }); // Babel

  tool.onRunDriver.listen(context => {
    context.addOption('--copy-files');

    if (usingTypeScript && !context.getRiskyOption('extensions')) {
      context.addOption('--extensions', EXTS.join(','));
    }

    if (hasNoParams(context, 'babel')) {
      context.addParam('src');
      context.addOption('--out-dir', tool.config.settings.esm || context.getRiskyOption('esm') ? 'esm' : 'lib');
    }
  }, 'babel'); // ESLint

  tool.onRunDriver.listen(context => {
    context.addOptions(['--color', '--fix']);

    if (usingTypeScript && !context.getRiskyOption('ext')) {
      context.addOption('--ext', EXTS.join(','));
    }

    if (hasNoParams(context, 'eslint')) {
      if (workspacePrefixes.length > 0) {
        workspacePrefixes.forEach(wsPrefix => {
          context.addParam(new core.Path(wsPrefix, 'src').path());
        });
      } else {
        context.addParams(['src']);
      }
    }

    if (tool.driverRegistry.isRegistered('prettier')) {
      context.addDriverDependency(tool.driverRegistry.get('prettier'));
    }

    if (usingTypeScript) {
      context.addDriverDependency(tool.driverRegistry.get('typescript'));
    }
  }, 'eslint'); // Jest

  tool.onRunDriver.listen((context, driver) => {
    context.addOptions(['--colors', '--logHeapUsage']);
    const env = {
      NODE_ENV: 'test',
      TZ: 'UTC'
    };

    if (context.argv.includes('--coverage')) {
      context.addOption('--detectOpenHandles');
    } // https://jestjs.io/docs/ecmascript-modules


    if (tool.config.settings.esm) {
      env.NODE_OPTIONS = `--experimental-vm-modules ${process.env.NODE_OPTIONS ?? ''}`.trim();
    }

    driver.configure({
      env
    }); // Generate babel config to transform files

    if (tool.driverRegistry.isRegistered('babel')) {
      context.addDriverDependency(tool.driverRegistry.get('babel'));
    }
  }, 'jest'); // Prettier

  tool.onRunDriver.listen(context => {
    if (hasNoParams(context, 'prettier')) {
      context.addOption('--write');
      context.addParam('.');
    }
  }, 'prettier');
}

module.exports = vessel;
//# sourceMappingURL=index2.js.map
