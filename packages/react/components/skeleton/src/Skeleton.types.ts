import { IContentLoaderProps } from 'react-content-loader';
import type { CSS } from '@project44-manifest/react-styles';

export const SkeletonElement = 'svg';

export interface SkeletonProps extends IContentLoaderProps {
  /**
   * Classes to be applied to the root element
   */
  className?: string;
  /**
   * Theme aware style object
   */
  css?: CSS;
}
