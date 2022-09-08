import * as React from 'react';
import sidebar, { SidebarItem } from 'sidebar.config';
import DocsLayout from '../../../layouts/Docs';
import { GetStaticProps } from 'next';
import GettingStartedGrid from '../../../components/GettingStartedGrid';

interface ComponentPageProps {
  sidebarItems?: SidebarItem[];
}

export default function ComponentPage(props: ComponentPageProps) {
  const { sidebarItems } = props;

  return (
    <DocsLayout
      description="Manifest Design System is the foundation on which all products at project44 are built."
      sidebarItems={sidebarItems}
      title="Getting Started"
    >
      <GettingStartedGrid />
    </DocsLayout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const sidebarItems = sidebar;

  return {
    props: { sidebarItems },
  };
};
