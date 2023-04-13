import React from 'react';
import clsx from 'clsx';
import isInternalUrl from '@docusaurus/isInternalUrl';
import Link from '@docusaurus/Link';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { isActiveSidebarItem } from '@docusaurus/theme-common/internal';
import IconExternalLink from '@theme/Icon/ExternalLink';
import styles from './styles.module.css';

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const { href, label, className, autoAddBaseUrl, customProps } = item;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const isActive = isActiveSidebarItem(item, activePath);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const isInternalLink = isInternalUrl(href);
  const isProduction = customProps?.status === 'production';

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        className,
      )}
      key={label}
    >
      <Link
        className={clsx(
          'menu__link',
          styles.docSidebarItemLink,
          !isInternalLink && styles.menuExternalLink,
          {
            'menu__link--active': isActive,
          },
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}
      >
        <div>
          {label}
          {!isInternalLink && <IconExternalLink />}
        </div>
        {!isProduction && customProps?.status && (
          <span className={clsx('badge badge--success')}>{customProps.status}</span>
        )}
      </Link>
    </li>
  );
}
