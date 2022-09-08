export interface SidebarItem {
  collapsible?: boolean;
  collapsed?: boolean;
  href: string;
  items?: SidebarItem[];
  title: string;
}

export const sidebar: SidebarItem[] = [
  {
    collapsible: true,
    href: '/docs/getting-started',
    title: 'Getting Started',
    items: [
      { title: 'For Designers', href: '/docs/getting-started/designers' },
      { title: 'For Developers', href: '/docs/getting-started/developers' },
      { title: 'Contributing', href: '/docs/getting-started/contributing' },
    ],
  },
  {
    collapsible: true,
    href: '/docs/components',
    title: 'Components',
    items: [
      { title: 'Avatar', href: '/docs/components/avatar' },
      { title: 'Box', href: '/docs/components/box' },
      { title: 'Button', href: '/docs/components/button' },
      // { title: 'Card', href: '/docs/components/card' },
      // { title: 'Checkbox', href: '/docs/components/checkbox' },
      // { title: 'Combobox', href: '/docs/components/combobox' },
      // { title: 'Container', href: '/docs/components/container' },
      // { title: 'Date Picker', href: '/docs/components/data-picker' },
      // { title: 'Dropdown', href: '/docs/components/dropdown' },
      // { title: 'Flex', href: '/docs/components/flex' },
      // { title: 'Form Control', href: '/docs/components/form-control' },
      // { title: 'Grid', href: '/docs/components/grid' },
      // { title: 'Link', href: '/docs/components/link' },
      // { title: 'List Box', href: '/docs/components/list-box' },
      // { title: 'Pagination', href: '/docs/components/pagination' },
      // { title: 'Pill', href: '/docs/components/pill' },
      // { title: 'Popover', href: '/docs/components/popover' },
      // { title: 'Radio', href: '/docs/components/radio' },
      // { title: 'Select', href: '/docs/components/select' },
      // { title: 'Separator', href: '/docs/components/Separator' },
      // { title: 'Stack', href: '/docs/components/stack' },
      // { title: 'Switch', href: '/docs/components/switch' },
      // { title: 'Table', href: '/docs/components/table' },
      // { title: 'Tag', href: '/docs/components/tag' },
      // { title: 'Text Area', href: '/docs/components/text-area' },
      // { title: 'Text Field', href: '/docs/components/text-field' },
      // { title: 'Tooltip', href: '/docs/components/tooltip' },
      // { title: 'Typography', href: '/docs/components/typography' },
      // { title: 'Visually Hidden', href: '/docs/components/visually-hidden' },
    ],
  },
];

export default sidebar;
