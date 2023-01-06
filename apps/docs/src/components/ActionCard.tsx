import * as React from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Box, Card, CardBody, CardHeader, Icon, Typography } from '@project44-manifest/react';

interface ActionCardProperties {
  description?: string;
  href: string;
  src: string;
  title: string;
  onClick?: () => void;
}

function ActionCard(properties: ActionCardProperties) {
  const { description, href, src, title } = properties;

  return (
    <NextLink passHref href={href}>
      <Box as="a" css={{ color: 'inherit', textDecoration: 'none', typography: '$body' }}>
        <Card css={{ '&:hover': { boxShadow: '$large' } }}>
          <Box css={{ px: '$large', pt: '$large' }}>
            <NextImage height={125} layout="responsive" src={src} width={244} />
          </Box>
          <CardHeader
            css={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '$medium',
              paddingBottom: description ? 'inherit' : '$medium',
            }}
          >
            <Typography variant="title">{title}</Typography>
            <Icon icon="arrow_forward" />
          </CardHeader>
          {description && <CardBody>{description}</CardBody>}
        </Card>
      </Box>
    </NextLink>
  );
}

export default ActionCard;
