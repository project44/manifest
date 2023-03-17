import * as React from 'react';
import clsx from 'clsx';

interface BrowserWindowProps {
  children: React.ReactNode;
  minHeight?: number;
  url?: string;
}

export function BrowserWindow(props: BrowserWindowProps) {
  const { children, minHeight, url = 'http://localhost:3000' } = props;

  return (
    <div className="browser-window" style={{ minHeight }}>
      <div className="browser-window__chrome">
        <div className="browser-window__chrome-dots">
          <span className="browser-window__chrome-dot" style={{ background: '#f25f58' }} />
          <span className="browser-window__chrome-dot" style={{ background: '#fbbe3c' }} />
          <span className="browser-window__chrome-dot" style={{ background: '#58cb42' }} />
        </div>
        <div className={clsx('browser-window__address-bar', 'text--truncate')}>{url}</div>
        <div className="browser-window__menu">
          <div>
            <span className="browser-window__menu-bar" />
            <span className="browser-window__menu-bar" />
            <span className="browser-window__menu-bar" />
          </div>
        </div>
      </div>
      <div className="browser-window__body">{children}</div>
    </div>
  );
}
