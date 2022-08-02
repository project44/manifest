import * as React from 'react';
import { Box, Button, ButtonGroup, Flex, Typography } from '@project44-manifest/react';
import { useHistory } from '@docusaurus/router';

export const Hero: React.FC<unknown> = () => {
  const history = useHistory();

  return (
    <Box css={{ margin: '0 auto', maxWidth: '$large', px: '$x-large' }}>
      <Flex css={{ pt: '6rem' }} orientation="vertical">
        <Typography
          css={{
            fontSize: '64px',
            lineHeight: '76px',
            pb: '$large',

            '> em': {
              background: '$brand-gradient',
              backgroundClip: 'text',
              fontStyle: 'normal',
              '-webkit-background-clip': 'text',
              '-moz-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              ' -moz-text-fill-color': 'transparent',
            },
          }}
          variant="display"
        >
          <em>Manifesting</em> experiences
          <br /> through design.
        </Typography>
        <Typography css={{ pb: '$x-large' }}>
          A shared design language for designing and building products at project44.
        </Typography>
        <ButtonGroup>
          <Button onClick={() => history.push('/docs/')}>Get started</Button>
          <Button variant="secondary">GitHub</Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};
