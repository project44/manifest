import fs from 'fs';

export function parseJSON<T>(filePath: string): T {
  const content = fs
    .readFileSync(filePath, 'utf8')
    .split('\n')
    // Remove comments from JSON files
    .filter(line => !/^\s*(#|\/)/.test(line))
    .join('\n');

  return JSON.parse(content) as T;
}
