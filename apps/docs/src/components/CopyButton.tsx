import * as React from 'react';
import { IconButton, Icon, Tooltip } from '@project44-manifest/react';
import copyToClipboard from 'copy-to-clipboard';

interface CopyButtonProps {
  code: string;
}

function CopyButton(props: CopyButtonProps) {
  const { code } = props;

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

    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <Tooltip title={isCopied ? 'Copied' : 'Copy'}>
      <IconButton onPress={handleCopy} size="small" variant="tertiary">
        <Icon icon="content_copy" />
      </IconButton>
    </Tooltip>
  );
}

export default CopyButton;
