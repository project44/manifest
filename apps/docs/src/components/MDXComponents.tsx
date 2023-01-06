import * as React from 'react';
import * as Manifest from '@project44-manifest/react';
import Anchor from './Anchor';
import BlockQuote from './BlockQuote';
import CodeBlock from './CodeBlock';
import Colors from './Colors';
import ColorSwatch from './ColorSwatch';
import Heading from './Heading';
import Image from './Image';
import InlineCode from './InlineCode';
import PropertiesTable from './PropsTable';
import TypeScale from './TypeScale';

const MDXComponents = {
  ...Manifest,
  Colors,
  ColorSwatch,
  PropsTable: PropertiesTable,
  TypeScale,
  a: Anchor,
  blockquote: BlockQuote,
  code: InlineCode,
  Image,
  h1: (properties: React.DetailsHTMLAttributes<unknown>) => (
    <Manifest.Typography as="h1" variant="display" {...properties} />
  ),
  h2: (properties: React.DetailsHTMLAttributes<unknown>) => (
    <Heading as="h2" variant="heading" {...properties} />
  ),
  h3: (properties: React.DetailsHTMLAttributes<unknown>) => (
    <Heading as="h3" variant="title" {...properties} />
  ),
  h4: (properties: React.DetailsHTMLAttributes<unknown>) => (
    <Heading as="h4" variant="subtitle" {...properties} />
  ),
  hr: (properties: React.DetailsHTMLAttributes<unknown>) => <Manifest.Separator {...properties} />,
  p: (properties: React.DetailsHTMLAttributes<unknown>) => (
    <Manifest.Typography as="p" css={{ marginBottom: '$medium' }} variant="body" {...properties} />
  ),
  pre: (properties: any) => {
    if (typeof properties.children === 'string') return <Manifest.Box as="pre" {...properties} />;

    return <CodeBlock {...properties} />;
  },
  table: Manifest.Table,
  tbody: Manifest.TableBody,
  thead: Manifest.TableHeader,
  td: (properties: React.DetailsHTMLAttributes<unknown>) => (
    <Manifest.TableCell css={{ whiteSpace: 'inherit' }} {...properties} />
  ),
  tr: Manifest.TableRow,
  th: Manifest.TableColumn,
};

export default MDXComponents;
