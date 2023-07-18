import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { usePrismTheme } from '@docusaurus/theme-common';
import { BrowserWindow } from '@site/src/components';

export default function Playground({ children, ...props }: { children: string }) {
  const prismTheme = usePrismTheme();

  return (
    <div className="playground">
      <LiveProvider
        code={children.trim()}
        theme={prismTheme}
        // eslint-disable-next-line react/jsx-no-bind
        transformCode={(code) => code.trim()}
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
