import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ebc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '666'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '084'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'ee0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'b6d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f35'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '14b'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '742'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '2f0'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '887'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '48a'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '696'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '902'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '355'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '64e'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'dce'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '1de'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'dab'),
    exact: true
  },
  {
    path: '/demos/action-card',
    component: ComponentCreator('/demos/action-card', '95f'),
    exact: true
  },
  {
    path: '/demos/action-card-no-body',
    component: ComponentCreator('/demos/action-card-no-body', '922'),
    exact: true
  },
  {
    path: '/demos/action-card-small',
    component: ComponentCreator('/demos/action-card-small', '876'),
    exact: true
  },
  {
    path: '/demos/avatar',
    component: ComponentCreator('/demos/avatar', '7e7'),
    exact: true
  },
  {
    path: '/demos/avatar-fallback',
    component: ComponentCreator('/demos/avatar-fallback', '52f'),
    exact: true
  },
  {
    path: '/demos/avatar-sizes',
    component: ComponentCreator('/demos/avatar-sizes', 'c0d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '89e'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'b00'),
        exact: true
      },
      {
        path: '/docs/components',
        component: ComponentCreator('/docs/components', '0b0'),
        exact: true
      },
      {
        path: '/docs/components/action-card',
        component: ComponentCreator('/docs/components/action-card', 'b4c'),
        exact: true,
        sidebar: "components"
      },
      {
        path: '/docs/components/Avatar',
        component: ComponentCreator('/docs/components/Avatar', '823'),
        exact: true
      },
      {
        path: '/docs/getting-started/installation',
        component: ComponentCreator('/docs/getting-started/installation', 'ac7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/getting-started/overview',
        component: ComponentCreator('/docs/getting-started/overview', 'a2d'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '404'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
