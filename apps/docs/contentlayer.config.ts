import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import toc from 'markdown-toc';

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `docs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string' },
    description: { type: 'string' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc => `/${doc._raw.flattenedPath}`,
    },
    meta: {
      type: 'json',
      resolve: doc => ({
        title: doc.title,
        description: doc.description,
        slug: `/${doc._raw.flattenedPath}`,
        toc: toc(doc.body.raw).json.filter(t => t.lvl !== 1),
      }),
    },
  },
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMdx],
    rehypePlugins: [rehypeSlug],
  },
});

export default contentLayerConfig;
