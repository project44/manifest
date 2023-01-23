module.exports = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    'preset-default',
    'removeDimensions',
    'removeViewBox',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['path:(fill|stroke)', 'fill'],
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            fill: 'currentColor',
            viewBox: '0 0 24 24',
          },
        ],
      },
    },
    {
      name: 'sortAttrs',
      params: {
        xmlnsOrder: 'alphabetical',
      },
    },
  ],
};
