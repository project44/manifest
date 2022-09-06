interface SidebarItem {
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
      { title: 'Button', href: '/docs/components/button' },
    ],
  },
];

export default sidebar;
