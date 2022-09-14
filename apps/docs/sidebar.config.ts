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
    slug: '/docs/tokens',
    title: 'Tokens',
    items: [
      { title: 'Colors', slug: '/docs/tokens/colors' },
      { title: 'Radius', slug: '/docs/tokens/radius' },
      { title: 'Shadows', slug: '/docs/tokens/shadows' },
      { title: 'Spacing', slug: '/docs/tokens/spacing' },
      { title: 'Typography', slug: '/docs/tokens/typography' },
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
