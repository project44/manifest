import * as React from 'react';
import { Box, pxToRem, Stack } from '@project44-manifest/react';
import TOCItem from '../components/TOCItem';
import type { TOC as TOCType } from '../types';

interface TOCProperties {
  items?: TOCType[];
}

function TOC(properties: TOCProperties) {
  const { items = [] } = properties;

  const [currentHeading, setCurrentHeading] = React.useState<string>('');

  const observer = React.useRef<IntersectionObserver | null>(null);

  React.useEffect(() => {
    const headings = items.map((item) => document.getElementById(item.slug));

    observer.current?.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry?.isIntersecting) {
            setCurrentHeading(entry.target.getAttribute('id') ?? '');
          }
        }
      },
      { rootMargin: '0% 0% -85% 0%' },
    );

    for (const heading of headings) {
      if (heading) observer.current?.observe(heading);
    }

    return () => observer.current?.disconnect();
  }, [items]);

  return (
    <Box
      as="nav"
      css={{
        height: `calc(100vh - ${pxToRem(104)})`,
        position: 'fixed',
        right: 0,
        top: pxToRem(104),
      }}
    >
      <Box
        css={{
          borderLeft: '1px solid $border-primary',
          width: pxToRem(240),
        }}
      >
        <Stack
          as="ul"
          css={{
            listStyleType: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {items.map((item) => (
            <TOCItem
              key={item.slug}
              content={item.content}
              currentHeading={currentHeading}
              level={item.lvl}
              slug={item.slug}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default TOC;
