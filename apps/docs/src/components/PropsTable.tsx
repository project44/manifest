import * as React from 'react';
import { props as componentDocs, PropDoc } from '../data/props';
import { Flex, Separator, Stack, Typography } from '@project44-manifest/react';
import InlineCode from './InlineCode';

interface PropsTableProp {
  of: string;
}

function PropsTable(props: PropsTableProp) {
  const { of } = props;

  const propDocs = React.useMemo(() => {
    const { props: _props } = componentDocs.find(component => component.displayName === of);

    return _props as PropDoc[];
  }, [of]);

  return (
    <Stack css={{ pb: '$x-large' }}>
      {propDocs.map(doc => (
        <Stack key={`${of}_${doc.name}`}>
          <Separator css={{ my: '$medium' }} />
          <Flex align="center" justify="between">
            <Stack gap="small" orientation="horizontal">
              <Typography variant="subtitle">
                {doc.name}
                {doc.required ? '' : '?'}
              </Typography>
              <Typography variant="subtext">
                <InlineCode>{doc.type}</InlineCode>
              </Typography>
            </Stack>
          </Flex>
          <Typography variant="subtext">{doc.description}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default PropsTable;
