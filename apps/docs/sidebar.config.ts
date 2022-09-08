import type { SidebarItem } from './src/types';

export const sidebar: SidebarItem[] = [
  {
    collapsible: true,
    slug: '/docs/getting-started',
    title: 'Getting Started',
    items: [
      { title: 'Contributing', slug: '/docs/getting-started/contributing' },
      { title: 'Designers', slug: '/docs/getting-started/designers' },
      { title: 'Developers', slug: '/docs/getting-started/developers' },
    ],
  },
  {
    collapsible: true,
    slug: '/docs/foundations',
    title: 'Foundations',
    items: [
      { title: 'Colors', slug: '/docs/foundations/colors' },
      { title: 'Radius', slug: '/docs/foundations/radius' },
      { title: 'Shadows', slug: '/docs/foundations/shadows' },
      { title: 'Spacing', slug: '/docs/foundations/spacing' },
      { title: 'Typography', slug: '/docs/foundations/typography' },
    ],
  },
  {
    collapsible: true,
    slug: '/docs/components',
    title: 'Components',
    items: [
      { title: 'Avatar', slug: '/docs/components/avatar' },
      { title: 'Box', slug: '/docs/components/box' },
      { title: 'Button', slug: '/docs/components/button' },
    ],
  },
];

export default sidebar;
