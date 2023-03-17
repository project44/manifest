import { LiveEditor, LiveError, LivePreview, LiveProvider, LiveProviderProps } from 'react-live';
import { usePrismTheme } from '@docusaurus/theme-common';
import { BrowserWindow } from '@site/src/components';

export default function Playground({
  children,
  transformCode,
  ...props
}: Omit<LiveProviderProps, 'children' | 'ref'> & { children: string }) {
  const prismTheme = usePrismTheme();

  return (
    <div className="playgroud">
      <LiveProvider
        code={children.trim()}
        theme={prismTheme}
        transformCode={transformCode ?? ((code) => code.trim())}
        {...props}
      >
        <BrowserWindow>
          <LivePreview />
          <LiveError />
        </BrowserWindow>
        <LiveEditor />
      </LiveProvider>
    </div>
  );
}
