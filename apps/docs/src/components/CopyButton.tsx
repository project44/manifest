import * as React from 'react';
import copyToClipboard from 'copy-to-clipboard';
import { Icon, IconButton, Tooltip } from '@project44-manifest/react';

interface CopyButtonProperties {
  code: string;
}

function CopyButton(properties: CopyButtonProperties) {
  const { code } = properties;

  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = React.useCallback(() => {
    if (typeof code === 'string') {
      copyToClipboard(code);

      setIsCopied(true);
    } else {
      setIsCopied(false);
    }
  }, [code]);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isCopied) {
      timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }

    return () => void clearTimeout(timer);
  }, [isCopied]);

  return (
    <Tooltip title={isCopied ? 'Copied' : 'Copy'}>
      <IconButton size="small" variant="tertiary" onPress={handleCopy}>
        <Icon icon="content_copy" />
      </IconButton>
    </Tooltip>
  );
}

export default CopyButton;
