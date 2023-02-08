import type { Format } from 'style-dictionary';

export const jsonFormatter: Format = {
  name: 'json/raw',
  formatter: ({ dictionary }) => {
    // Removing filePath and isSource as we do not need these in the output.
    const result = dictionary.allProperties.map(({ filePath, isSource, original, ...rest }) => ({
      ...rest,
    }));

    // Hack for adding new line at the end of the file.
    return [JSON.stringify(result, null, 2), ''].join('\n');
  },
};
