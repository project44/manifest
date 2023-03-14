import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

export interface DemoProps {
  fileName: string;
}

export function Demo(props: DemoProps) {
  const { fileName } = props;

  const [code, setCode] = React.useState('');
  const [iframeHeight, setIframeHeight] = React.useState(400);

  const handleExampleLoad = () => {
    let attempts = 0;

    const waitForExampleContentToRender = setInterval(() => {
      const exampleIframe = document.getElementById('demo-preview') as HTMLIFrameElement;
      const exampleIframeDOM = exampleIframe?.contentDocument;
      const exampleWrapper = exampleIframeDOM?.getElementById('polaris-example');

      if (exampleWrapper) {
        const newHeight = 112 + exampleWrapper.offsetHeight;
        setIframeHeight(newHeight);

        clearInterval(waitForExampleContentToRender);
      }

      attempts += 1;

      if (attempts > 10) {
        clearInterval(waitForExampleContentToRender);
      }
    }, 100);

    return () => void clearInterval(waitForExampleContentToRender);
  };

  React.useEffect(() => {
    const getDemoSource = async () => {
      const fileSource = await import(`!!raw-loader!../../pages/demos/${fileName}`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const rawSource = fileSource.default.toString() as string;

      if (rawSource) {
        setCode(
          rawSource
            .split('\n')
            .filter((line) => !line.includes('withDemo'))
            .join('\n'),
        );
      }
    };

    getDemoSource().catch((error) => void console.log(error));
  }, [fileName]);

  return (
    <div className="demo">
      <div className="demo__preview">
        <iframe
          className="demo__iframe"
          height={iframeHeight}
          id="demo-preview"
          src={`/demos/${fileName.replace('.tsx', '')}`}
          title={`${fileName.replace('.tsx', '')}`}
          onLoad={handleExampleLoad}
        />
      </div>
      <div className="demo__code">
        <Highlight {...defaultProps} code={code.trim()} language="tsx">
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <pre className={className}>
              {tokens.map((line, i) => {
                const { className: lineClassName } = getLineProps({ line, key: i });

                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={`${lineClassName}_${i}`} className={lineClassName}>
                    {line.map((token, key) => {
                      const { children, className: tokenClassName } = getTokenProps({
                        token,
                        key,
                      });

                      return (
                        // eslint-disable-next-line react/no-array-index-key
                        <span key={`${tokenClassName}_${key}`} className={tokenClassName}>
                          {children}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
