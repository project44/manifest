import { cx } from '@project44-manifest/react-styles';
import { StyledSkeleton } from './Skeleton.styles';
import type { SkeletonProps } from './Skeleton.types';

export function Skeleton(props: SkeletonProps) {
  const { children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-skeleton', classNameProp);

  return (
    <StyledSkeleton {...other} className={className} css={css}>
      {children}
    </StyledSkeleton>
  );
}

Skeleton.displayName = 'Skeleton';
