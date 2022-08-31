// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
var Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: 'components/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string' },
    description: { type: 'string' },
    id: { type: 'string' },
    scope: {
      type: 'enum',
      options: ['guidelines', 'api'],
      default: 'guidelines',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc => `/${doc._raw.flattenedPath}`,
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
//# sourceMappingURL=compiled-contentlayer-config-GLDJY2CV.mjs.map
