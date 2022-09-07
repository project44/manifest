import * as React from 'react';
import sidebar, { SidebarItem } from 'sidebar.config';
import DocsLayout from '../../../layouts/Docs';
import { GetStaticProps } from 'next';
import ComponentGrid from '../../../components/ComponentGrid';

interface ComponentPageProps {
  sidebarItems?: SidebarItem[];
}

export default function ComponentPage(props: ComponentPageProps) {
  const { sidebarItems } = props;

  return (
    <DocsLayout sidebarItems={sidebarItems} title="Components">
      <ComponentGrid />
    </DocsLayout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const sidebarItems = sidebar;

  return {
    props: { sidebarItems },
  };
};
