// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
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
    frontMatter: {
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
});
var contentlayer_config_default = contentLayerConfig;
export { contentlayer_config_default as default };
//# sourceMappingURL=compiled-contentlayer-config-ZAVCGI2E.mjs.map
