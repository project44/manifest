import * as React from 'react';
import * as Manifest from '@project44-manifest/react';
import Anchor from './Anchor';
import BlockQuote from './BlockQuote';
import CodeBlock from './CodeBlock';
import Colors from './Colors';
import ColorSwatch from './ColorSwatch';
import InlineCode from './InlineCode';
import Heading from './Heading';
import Image from './Image';

const MDXComponents = {
  ...Manifest,
  Colors,
  ColorSwatch,
  a: Anchor,
  blockquote: BlockQuote,
  code: InlineCode,
  Image,
  h1: (props: React.DetailsHTMLAttributes<unknown>) => (
    <Manifest.Typography as="h1" variant="display" {...props} />
  ),
  h2: (props: React.DetailsHTMLAttributes<unknown>) => (
    <Heading as="h2" variant="heading" {...props} />
  ),
  h3: (props: React.DetailsHTMLAttributes<unknown>) => (
    <Heading as="h3" variant="title" {...props} />
  ),
  h4: (props: React.DetailsHTMLAttributes<unknown>) => (
    <Heading as="h4" variant="subtitle" {...props} />
  ),
  hr: (props: React.DetailsHTMLAttributes<unknown>) => <Manifest.Separator {...props} />,
  p: (props: React.DetailsHTMLAttributes<unknown>) => (
    <Manifest.Typography as="p" css={{ marginBottom: '$large' }} variant="body" {...props} />
  ),
  pre: (props: any) => {
    if (typeof props.children === 'string') return <Manifest.Box as="pre" {...props} />;

    return <CodeBlock {...props} />;
  },
  table: Manifest.Table,
  tbody: Manifest.TableBody,
  thead: Manifest.TableHeader,
  td: (props: React.DetailsHTMLAttributes<unknown>) => (
    <Manifest.TableCell css={{ whiteSpace: 'inherit' }} {...props} />
  ),
  tr: Manifest.TableRow,
  th: Manifest.TableColumn,
};

export default MDXComponents;
