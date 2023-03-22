import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import { StyledSkeleton } from './Skeleton.styles';
import type { SkeletonProps } from './Skeleton.types';

export function Skeleton(props: SkeletonProps) {
  const { children, className: classNameProp, css, ...other } = props;

  const id = React.useId();

  const className = cx('manifest-skeleton', classNameProp);

  return (
    <StyledSkeleton
      {...other}
      className={className}
      css={css}
      uniqueKey={id} // needed for SSR: https://github.com/danilowoz/react-content-loader#sedrver-side-rendering-ssr---match-snapshot
    >
      {children}
    </StyledSkeleton>
  );
}
