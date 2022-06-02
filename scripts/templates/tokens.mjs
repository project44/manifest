export const tokensTemplate = tokens =>
  tokens.map(token => `export const ${token.name} = '${token.value}';`).join('\n');
