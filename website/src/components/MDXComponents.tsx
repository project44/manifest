import * as React from 'react';
import {
  Box,
  Separator,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Typography,
} from '@project44-manifest/react';
import Anchor from './Anchor';
import BlockQuote from './BlockQuote';
import CodeBlock from './CodeBlock';
import InlineCode from './InlineCode';
import Heading from './Heading';
import Image from './Image';

const MDXComponents = {
  a: Anchor,
  blockquote: BlockQuote,
  code: InlineCode,
  Image,
  h1: (props: React.DetailsHTMLAttributes<unknown>) => (
    <Typography as="h1" variant="display" {...props} />
  ),
  h2: (props: React.DetailsHTMLAttributes<unknown>) => <Heading variant="heading" {...props} />,
  h3: (props: React.DetailsHTMLAttributes<unknown>) => (
    <Heading as="h3" variant="title" {...props} />
  ),
  h4: (props: React.DetailsHTMLAttributes<unknown>) => (
    <Heading as="h4" variant="subtitle" {...props} />
  ),
  hr: (props: React.DetailsHTMLAttributes<unknown>) => <Separator {...props} />,
  p: (props: React.DetailsHTMLAttributes<unknown>) => (
    <Typography as="p" css={{ marginBottom: '$large' }} variant="body" {...props} />
  ),
  pre: props => {
    if (typeof props.children === 'string') return <Box as="pre" {...props} />;

    return <CodeBlock {...props} />;
  },
  table: Table,
  tbody: TableBody,
  thead: TableHeader,
  td: (props: React.DetailsHTMLAttributes<unknown>) => (
    <TableCell css={{ whiteSpace: 'inherit' }} {...props} />
  ),
  tr: TableRow,
  th: TableColumn,
};

export default MDXComponents;
