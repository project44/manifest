import type { TOCItem as TOCItemType } from '../types';
import * as React from 'react';
import { Box, pxToRem, Stack } from '@project44-manifest/react';
import TOCItem from '../components/TOCItem';

interface TOCProps {
  items?: TOCItemType[];
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
    <Box
      as="nav"
      css={{
        alignSelf: 'flex-start',
        borderLeft: '1px solid $border-primary',
        height: `calc(100vh - ${pxToRem(72)})`,
        position: 'sticky',
        overflow: 'auto',
        overscrollBehavior: 'contain',
        pl: '$x-large',
        py: pxToRem(64),
        top: pxToRem(64),
        width: pxToRem(238),
      }}
    >
      <Stack as="ul" css={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {items.map(item => (
          <TOCItem
            content={item.content}
            currentHeading={currentHeading}
            key={item.slug}
            level={item.lvl}
            slug={item.slug}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default TOC;
