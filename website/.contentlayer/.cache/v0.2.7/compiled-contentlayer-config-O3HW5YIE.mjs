// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
var Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: 'components/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string' },
    description: { type: 'string' },
    category: { type: 'string' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
    pathname: {
      type: 'string',
      resolve: () => '/components/[...slug]',
    },
    frontmatter: {
      type: 'json',
      resolve: doc => ({
        title: doc.title,
        description: doc.description,
        slug: `/${doc._raw.flattenedPath}`,
      }),
    },
  },
}));
var contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Component],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
});
var contentlayer_config_default = contentLayerConfig;
export { contentlayer_config_default as default };
//# sourceMappingURL=compiled-contentlayer-config-O3HW5YIE.mjs.map
