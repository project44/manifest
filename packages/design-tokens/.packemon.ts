import type { ConfigFile } from 'packemon';
import copy from 'rollup-plugin-copy';

const config: ConfigFile = {
  rollupInput(config) {
    config.plugins?.push(
      copy({
        targets: [
          {
            src: ['src/tokens.css', 'src/tokens.json', 'src/tokens.map.scss', 'src/tokens.scss'],
            dest: 'lib',
          },
        ],
      }),
    );
  },
};

export default config;
