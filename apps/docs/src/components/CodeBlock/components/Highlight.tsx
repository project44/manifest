import * as React from 'react';
import Prism, { defaultProps, Language, PrismTheme } from 'prism-react-renderer';
import { Box } from '@project44-manifest/react';

interface HighlightProperties {
  code: string;
  language: Language;
  theme: PrismTheme;
}

function Highlight(properties: HighlightProperties) {
  const { code, language, theme, ...other } = properties;

  return (
    <Prism {...defaultProps} code={code} language={language} theme={theme} {...other}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box css={{ fontFamily: '$mono', fontSize: '$small', overflowX: 'auto' }}>
          <Box as="pre" className={className} style={style}>
            {tokens.map((line, index) => (
              <Box key={index} css={{ px: '$medium' }} {...getLineProps({ line, key: index })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Prism>
  );
}

export default Highlight;
