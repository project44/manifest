import type { PrismTheme } from 'prism-react-renderer';
import * as Manifest from '@project44-manifest/react';
import * as React from 'react';
import Container from './Container';
import Editor from './Editior';
import { LiveProvider } from 'react-live';
import Preview from './Preview';
import Toolbar from './Toolbar';

interface LiveProps {
  code: string;
  showToolbar?: boolean;
  theme?: PrismTheme;
}

const scope = { ...Manifest };

function Live(props: LiveProps) {
  const { code, showToolbar, theme } = props;

  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <LiveProvider code={code} scope={scope} theme={theme}>
      <Container css={{ p: 0 }}>
        <Preview />
        {isExpanded && <Editor />}
      </Container>
      {showToolbar && (
        <Toolbar
          code={code}
          isExpanded={isExpanded}
          onExpandedChange={() => setIsExpanded(!isExpanded)}
        />
      )}
    </LiveProvider>
  );
}

export default Live;
