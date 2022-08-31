// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
var Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: 'components/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { description: 'The title of the component', type: 'string', required: true },
    description: { description: 'A brief component description', type: 'string', required: true },
    category: {
      description: 'The category grouping for the component',
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    pathname: {
      type: 'json',
      resolve: doc =>
        doc._raw.flattenedPath
          .split('/')
          .slice(1)
          .map(pathName => ({ pathName })),
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
//# sourceMappingURL=compiled-contentlayer-config-MJDRALY7.mjs.map
