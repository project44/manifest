import * as React from 'react';
import { Icon, IconButton, Stack, Tooltip } from '@project44-manifest/react';
import CopyButton from '../../CopyButton';

interface ToolbarProperties {
  code: string;
  isExpanded?: boolean;
  onExpandedChange?: (event: React.MouseEvent) => void;
}

function Toolbar(properties: ToolbarProperties) {
  const { code, isExpanded, onExpandedChange } = properties;

  return (
    <Stack css={{ justifyContent: 'flex-end', my: '$small' }} gap="small" orientation="horizontal">
      <Tooltip title={isExpanded ? 'Hide Code' : 'Show Code'}>
        <IconButton size="small" variant="tertiary" onClick={onExpandedChange}>
          <Icon icon={isExpanded ? 'unfold_less' : 'unfold_more'} />
        </IconButton>
      </Tooltip>
      <CopyButton code={code} />
    </Stack>
  );
}

export default Toolbar;
