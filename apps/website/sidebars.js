/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  foundations: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'foundations/overview',
    },
    {
      type: 'doc',
      label: 'Colors',
      id: 'foundations/colors',
    },
    {
      type: 'doc',
      label: 'Data Visualization',
      id: 'foundations/data-visualization',
    },
    {
      type: 'doc',
      label: 'Elevation',
      id: 'foundations/elevation',
    },
    {
      type: 'doc',
      label: 'Icons',
      id: 'foundations/icons',
    },
    {
      type: 'doc',
      label: 'Layout',
      id: 'foundations/layout',
    },
  ],
  components: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'components/overview',
    },
    {
      type: 'doc',
      label: 'Installation',
      id: 'components/installation',
    },
    {
      type: 'category',
      label: 'Actions',
      collapsed: false,
      items: [
        'components/action-card',
        'components/button',
        'components/button-group',
        'components/icon-button',
        'components/link',
      ],
    },
    {
      type: 'category',
      label: 'Content',
      collapsed: false,
      items: [
        'components/avatar',
        'components/card',
        'components/separator',
        'components/skeleton',
        'components/typography',
      ],
    },
    {
      type: 'category',
      label: 'Data Display',
      collapsed: false,
      items: ['components/list-box', 'components/pill', 'components/table', 'components/tag'],
    },
    {
      type: 'category',
      label: 'Date and Time',
      collapsed: false,
      items: ['components/date-picker', 'components/date-range-picker'],
    },
    {
      type: 'category',
      label: 'Inputs',
      collapsed: false,
      items: [
        'components/checkbox',
        'components/combobox',
        'components/form-control',
        'components/radio',
        'components/select',
        'components/text-area',
        'components/text-field',
      ],
    },
    {
      type: 'category',
      label: 'Layout',
      collapsed: false,
      items: ['components/container', 'components/flex', 'components/grid', 'components/stack'],
    },
    {
      type: 'category',
      label: 'Navigation',
      collapsed: false,
      items: ['components/breadcrumb', 'components/pagination', 'components/side-navigation'],
    },
    {
      type: 'category',
      label: 'Overlays',
      collapsed: false,
      items: ['components/dropdown', 'components/menu', 'components/popover', 'components/tooltip'],
    },
    {
      type: 'category',
      label: 'Utilities',
      collapsed: false,
      items: ['components/box', 'components/spinner', 'components/visually-hidden'],
    },
  ],
  tokens: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'tokens/overview',
    },
  ],
};

module.exports = sidebars;
