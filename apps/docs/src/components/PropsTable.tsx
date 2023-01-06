import * as React from 'react';
import { Flex, Separator, Stack, Typography } from '@project44-manifest/react';
import { PropDoc as PropertyDocument,props as componentDocs } from '../data/props';
import InlineCode from './InlineCode';

interface PropertiesTableProperty {
  of: string;
}

function PropertiesTable(properties: PropertiesTableProperty) {
  const { of } = properties;

  const propDocs = React.useMemo(() => {
    const { props: _properties } = componentDocs.find((component) => component.displayName === of);

    return _properties as PropertyDocument[];
  }, [of]);

  return (
    <Stack css={{ pb: '$x-large' }}>
      {propDocs.map((document_) => (
        <Stack key={`${of}_${document_.name}`}>
          <Separator css={{ my: '$medium' }} />
          <Flex align="center" justify="between">
            <Stack gap="small" orientation="horizontal">
              <Typography variant="subtitle">
                {document_.name}
                {document_.required ? '' : '?'}
              </Typography>
              <Typography variant="subtext">
                <InlineCode>{document_.type}</InlineCode>
              </Typography>
            </Stack>
          </Flex>
          <Typography variant="subtext">{document_.description}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default PropertiesTable;
