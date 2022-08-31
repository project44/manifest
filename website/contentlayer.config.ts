import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const Component = defineDocumentType(() => ({
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
    slug: {
      type: 'string',
      resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Component],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
});

export default contentLayerConfig;
