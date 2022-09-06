import type { TOCItem } from '../types';
import * as React from 'react';
import { Box, Link, pxToRem, Stack } from '@project44-manifest/react';
import NextLink from 'next/link';

interface TOCProps {
  items?: TOCItem[];
}

function TOC(props: TOCProps) {
  const { items = [] } = props;

  const [currentHeading, setCurrentHeading] = React.useState<string>('');

  const observer = React.useRef<IntersectionObserver | null>(null);

  React.useEffect(() => {
    const headings = items.map(item => document.getElementById(item.slug));

    observer.current?.disconnect();
    observer.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry?.isIntersecting) {
            setCurrentHeading(entry.target.getAttribute('id') ?? '');
          }
        });
      },
      { rootMargin: '0% 0% -85% 0%' },
    );

    headings.forEach(heading => {
      if (heading) observer.current?.observe(heading);
    });

    return () => observer.current?.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <Stack as="ul" css={{ listStyleType: 'none', margin: 0, padding: 0 }}>
      {items.map(item => (
        <Box as="li" css={{ py: '$x-small' }} key={item.slug}>
          <NextLink href={`#${item.slug}`} passHref>
            <Link
              css={{
                color: '$text-primary',
                display: 'flex',
                fontFamily: '$text',
                fontSize: '$small',
                fontWeight: '$normal',
                letterSpacing: '$medium',
                lineHeight: '$small',
                paddingLeft: item.lvl > 2 ? '$medium' : '$small',
                paddingRight: '$small',
                textDecoration: 'none',

                '&::before': {
                  backgroundColor: '$palette-indigo-500',
                  borderRadius: '$full',
                  content: '',
                  display: 'block',
                  height: pxToRem(24),
                  left: 0,
                  opacity: currentHeading === item.slug ? 1 : 0,
                  position: 'absolute',
                  width: 3,
                },
              }}
            >
              {item.content}
            </Link>
          </NextLink>
        </Box>
      ))}
    </Stack>
  );
}

export default TOC;
