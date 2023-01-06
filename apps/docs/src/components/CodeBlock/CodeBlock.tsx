import * as React from 'react';
import dynamic from 'next/dynamic';
import type { Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';
import { Box } from '@project44-manifest/react';
import { useStyles } from './CodeBlock.styles';
import Container from './components/Container';
import Highlight from './components/Highlight';

interface CodeBlockProperties {
  children: any;
  className?: string;
  live?: boolean;
  showToolbar?: boolean;
}

const Live = dynamic(() => import('./components/Live'));

function CodeBlock(properties: CodeBlockProperties) {
  const {
    children,
    className: classNameProperty,
    live = true,
    showToolbar = true,
  } = properties.children.props;

  const language = classNameProperty?.replace(/language-/, '') as Language;
  const code = children.trim();

  useStyles();

  if ((language === 'jsx' || language === 'tsx') && live) {
    return <Live code={code} showToolbar={showToolbar} theme={theme} />;
  }

  return (
    <Box css={{ position: 'relative', zIndex: 0 }}>
      <Container css={{ mb: '$large', px: 0, overflow: 'hidden' }}>
        <Highlight code={code} language={language} theme={theme} />
      </Container>
    </Box>
  );
}

export default CodeBlock;
