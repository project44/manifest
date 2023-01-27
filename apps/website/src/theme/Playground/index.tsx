import { LiveEditor, LiveError, LivePreview, LiveProvider, LiveProviderProps } from 'react-live';
import { usePrismTheme } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { Box } from '@project44-manifest/react';
import styles from './styles.module.css';

function ThemedLiveEditor() {
  const isBrowser = useIsBrowser();

  return <LiveEditor key={String(isBrowser)} className={styles.playgroundEditor} />;
}

export default function Playground({
  children,
  transformCode,
  ...props
}: Omit<LiveProviderProps, 'children' | 'ref'> & { children: string }) {
  const prismTheme = usePrismTheme();

  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        code={children.trim()}
        theme={prismTheme}
        transformCode={transformCode ?? ((code) => code.trim())}
        {...props}
      >
        <Box css={{ padding: '$medium' }}>
          <LivePreview />
          <LiveError />
        </Box>
        <ThemedLiveEditor />
      </LiveProvider>
    </div>
  );
}
