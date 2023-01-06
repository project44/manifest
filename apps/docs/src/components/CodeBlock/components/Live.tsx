import * as React from 'react';
import { LiveProvider } from 'react-live';
import * as I18n from '@react-aria/i18n';
import type { PrismTheme } from 'prism-react-renderer';
import * as InternationalizeDate from '@internationalized/date';
import * as Manifest from '@project44-manifest/react';
import Container from './Container';
import Editor from './Editor';
import Preview from './Preview';
import Toolbar from './Toolbar';

interface LiveProperties {
  code: string;
  showToolbar?: boolean;
  theme?: PrismTheme;
}

const scope = { ...Manifest, ...InternationalizeDate, ...I18n };

function Live(properties: LiveProperties) {
  const { code, showToolbar, theme } = properties;

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
          onExpandedChange={() => void setIsExpanded(!isExpanded)}
        />
      )}
    </LiveProvider>
  );
}

export default Live;
