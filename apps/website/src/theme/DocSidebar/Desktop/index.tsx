import React from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import type { Props } from '@theme/DocSidebar/Desktop';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import Content from '@theme/DocSidebar/Desktop/Content';
import Logo from '@theme/Logo';
import styles from './styles.module.css';

function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }: Props) {
  const {
    docs: {
      sidebar: { hideable },
    },
  } = useThemeConfig();
  return (
    <div
      className={clsx(
        styles.sidebar,
        styles.sidebarWithHideableNavbar,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        isHidden && styles.sidebarHidden,
      )}
    >
      <Logo className={styles.sidebarLogo} tabIndex={-1} />
      <Content path={path} sidebar={sidebar} />
      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  );
}
export default React.memo(DocSidebarDesktop);
