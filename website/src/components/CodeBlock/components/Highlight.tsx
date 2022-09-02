import * as React from 'react';
import Prism, { defaultProps, Language, PrismTheme } from 'prism-react-renderer';
import { Box } from '@project44-manifest/react';

interface HighlightProps {
  code: string;
  language: Language;
  theme: PrismTheme;
}

function Highlight(props: HighlightProps) {
  const { code, language, theme, ...other } = props;

  return (
    <Prism {...defaultProps} code={code} language={language} theme={theme} {...other}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box css={{ fontFamily: '$mono', fontSize: '$small', overflowX: 'auto' }}>
          <Box as="pre" className={className} style={style}>
            {tokens.map((line, i) => (
              <Box css={{ px: '$medium' }} key={i} {...getLineProps({ line, key: i })}>
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
