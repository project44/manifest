import * as React from 'react';
import { Box, Card, CardBody, CardHeader, Icon, Typography } from '@project44-manifest/react';
import NextImage from 'next/image';
import NextLink from 'next/link';

interface ActionCardProps {
  description?: string;
  href: string;
  src: string;
  title: string;
  onClick?(): void;
}

function ActionCard(props: ActionCardProps) {
  const { description, href, src, title } = props;

  return (
    <NextLink href={href} passHref>
      <Box as="a" css={{ color: 'inherit', textDecoration: 'none', typography: '$body' }}>
        <Card css={{ '&:hover': { boxShadow: '$large' } }}>
          <Box>
            <NextImage width={700} height={400} layout="responsive" src={src} />
          </Box>
          <CardHeader
            css={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}
          >
            <Typography variant="title">{title}</Typography>
            <Icon icon="arrow_forward" />
          </CardHeader>
          <CardBody>{description}</CardBody>
        </Card>
      </Box>
    </NextLink>
  );
}

export default ActionCard;
